import React from "react";
const Test: React.FC = () => {
   const [count, setCount] = React.useState(0);

   React.useEffect(() => {
     const intervalId = setInterval(() => {
       setCount(count + 1); // You want to increment the counter every second...
     }, 1000);
     return () => clearInterval(intervalId);
   }, [count]);
   return(<div>


    
   </div>)
};
export default Test;
