/* firstly script will run and after error in script that all codes does'nt work, this way we use try and catch that were script running and handling the error */

/* try catch works synchronously 
if any exception happens in scheduled code like in setTimeout() then try catch won't work */

const wifi = async () => {
  setTimeout(() => {
    console.log("Hacking Wifi Password.... please wait...");
  }, 1000);
  try {
    /*
    setTimeout(()=>{
        // we want this error solved of scheduling use inside try catch
        try {
            
            console.log(rahul);
        } catch(err){
            console.log(err);
        }
    },100) */
    console.log(rahul);
  } catch (error) {
    console.log(error);
  }

  setTimeout(() => {
    console.log("Fetching Username or Password.... please wait...");
  }, 2000);

  setTimeout(() => {
    console.log("Hacked Successfully.");
  }, 3000);
};

async function name1() {
  try {
    rahul2;
  } catch (error) {
    console.log(error);
  }
  // setTimeout(() => {
  //   return console.log("hello of name");
  // }, 3000);
  return console.log("hello of name");
}

const main = async () => {
  let b = await name1();
  let a = await wifi();
};

main();
