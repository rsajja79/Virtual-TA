
 function getBotResponse(input){
    var res = "";
    (async () => {
        try {
            // var url = "https://api.openai.com/v1/answers";
            var url = "https://hydroinformatics.uiowa.edu/lab/vitas/v1/demo/askQuestion/"+encodeURIComponent(input);

                var xhr = new XMLHttpRequest();
                xhr.open("GET", url,false); 
                // xhr.open("POST", url,false); 


                // xhr.setRequestHeader("Authorization", "Bearer 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");
                // xhr.setRequestHeader("Content-Type", "application/json");

             xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    console.log(xhr.status);
                    console.log(xhr.responseText);
                    var data=xhr.responseText;
                    var jsonResponse = JSON.parse(data);
                    res = jsonResponse["message"];
                    
                    // res = answers.reduce(
                    //     function (a, b) {
                    //             return a.length > b.length ? a : b;
                    //         }
                    //     );
                console.log(res);
                            }};

                // var data = {
                //     "file": "file-DRh84G7FD10oQRDj4cpCEHWp", 
                //     "question":input, 
                //     "search_model": "text-davinci-002", 
                //     "model": "text-davinci-002", 
                //     "examples_context": "In 2017, U.S. life expectancy was 78.6 years.", 
                //     "examples": [["What is human life expectancy in the United States?", "The average human life expectancy is 78 years."]],
                //     "temperature": 0.4,
                //     "max_rerank":5,
                //     "max_tokens": 100,
                //     "n":3,
                //     "stop": ["\n", "<|endoftext|>"]
                // };

                // xhr.send(JSON.stringify(data));
                xhr.send(null);
            } catch (error){
                res = "Answer not found, please re-phrase your question";
            }
            return res;
    })();
    return res;
}
