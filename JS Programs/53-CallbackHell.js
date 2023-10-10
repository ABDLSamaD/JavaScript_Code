// Callback Function e.g: and error handling
// /*
const LoadScript = (src, callback) => {
    // the script we created automatically generated how i can see the message of executed the script
    const script = document.createElement('script');
    script.src = src;

    script.onload = function () {
        console.log("loaded script: " + src);
        callback(null, src)
    }

    script.onerror = function () {
        console.log("Error on script ", src);
        callback(new Error("failed to compile"))
    }

    document.body.appendChild(script);
}

const hello = (error, src) => {
    if (error) {
        console.log(error);
        return;
    } else {
        alert("src will run: " + src);
    }
}
function goodmorning() {

    alert("Good Morning");
}

// any error in the script or url we can handled with onerror method
LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", hello);
// */

// Callback of hell pyramid of doom 
// when we have callback inside the callbacks, the code get difficult to manage

// pyramid of doom
LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function () {
    if (error) {
        console.log(error);
        return;
    }
    LoadScript("https://2cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function () {
        if (error) {
            console.log(error);
            return;
        }
        LoadScript("https://3cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function () {
            if (error) {
                console.log(error);
                return;
            }
            LoadScript("https://4cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function () {
                if (error) {
                    console.log(error);
                    return;
                }
                LoadScript("https://5cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function () {
                    if (error) {
                        console.log(error);
                        return;
                    }
                    LoadScript("https://6cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function () {
                        if (error) {
                            console.log(error);
                            return;
                        }
                        LoadScript("https://7cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function () {
                            if (error) {
                                console.log(error);
                                return;
                            }
                            LoadScript("https://8cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function () {
                                if (error) {
                                    console.log(error);
                                    return;
                                }
                                LoadScript("https://9cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function () {
                                    if (error) {
                                        console.log(error);
                                        return;
                                    }
                                    LoadScript("https://10cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function () {
                                        if (error) {
                                            console.log(error);
                                            return;
                                        }
                                        LoadScript("https://11cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function () {
                                            if (error) {
                                                console.log(error);
                                                return;
                                            }
                                            LoadScript("https://12cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function () {
                                                if (error) {
                                                    console.log(error);
                                                    return;
                                                }

                                            });

                                        })
                                    });

                                })
                            });

                        })
                    });

                })
            });

        })
    });
});


// this is not a good way of programming this is called a callback hell or pyramid of doom. b/c the code way to heroizontally; then we practice about promises
