import axios from "axios";
import { Button ,useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function RazorPay({details,totalprice}) {
  const toast = useToast();
  const navigate = useNavigate();
  function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}
async function displayRazorpay() {
  const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
  );

  if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
  }

  const result = await axios.post("http://localhost:5000/payment/orders",{totalprice});

  if (!result) {
      alert("Server error. Are you online?");
      return;
  }

  const { amount, id: order_id, currency } = result.data;

  const options = {
      key: "rzp_test_8DHk41YB81t2Ja", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "fitti",
      description: "Test Transaction",
      order_id: order_id,
      handler: async function (response) {
          const data = {
              orderCreationId: order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
          };

          const result = await axios.post("http://localhost:5000/payment/success", data);

          toast({
            title: "Payment successfull.",
            description: "We've Placed Your Order.",
            status: "success",
            position: "top",
            duration: 1000,
            isClosable: true,
          });
          navigate("/store");
      },
      prefill: {
          name: "sudarshan",
          email: "sudarshanpujari6@gmail.com",
          contact: "9123456780",
      },
      notes: {
          address: "let go",
      },
      theme: {
          color: "#61dafb",
      },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}

return (
  
      
          <Button display={"block"}
          borderRadius={"100px"}
          width="200px"
          margin="auto"
          marginTop={"20px"}
          _hover={{ bgColor: "#ff385a" }}
          color={"white"}
          bgColor={"#ff385a"}  onClick={displayRazorpay}
          disabled={totalprice==0 || details.address==="" || details.pin==="" ||details.state==="" || details.city===""}>
              Checkout
          </Button>
     
  
);

    
}

export default RazorPay;
