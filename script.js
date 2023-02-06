const ACTUAL_ID = "929497739715297320";
const RESULT_VALID_MESSAGE = "That is my correct Discord ID.";
const RESULT_VALID_COLOR = "#008000";
const RESULT_INVALID_MESSAGE = "That is not my Discord ID, it is an impersonator.";
const RESULT_INVALID_COLOR = "#ff0000";


$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('#sidebar, #content').css({
        transition: 'all 0.3s ease'
    });
});

        function validate(input) {
            if(input == ACTUAL_ID) return true;
            return false;
        } 

        function check() {
            var input = document.getElementById("discord").value;
            if(input == "") {
                document.getElementById("result").textContent = "";
                document.getElementById("result").style.color = "";
                return;
            }

            if(validate(input)) {
                document.getElementById("result").textContent = RESULT_VALID_MESSAGE;
                document.getElementById("result").style.color = RESULT_VALID_COLOR;
                return;
            }
            
            document.getElementById("result").textContent = RESULT_INVALID_MESSAGE;
            document.getElementById("result").style.color = RESULT_INVALID_COLOR;
        }


    function calculate(id) {
        var minFee = 10
        var dealValueRaw = document.getElementById("deal_value").value
        var dealValue = parseFloat(document.getElementById("deal_value").value);

        if(!dealValueRaw || dealValue <= 0) {
            document.getElementById("sentence").innerHTML = ""
            return
        }

        var fee = (dealValue*0.05 >= minFee) ? dealValue*0.05 : minFee;
        var sentence = getSentence(dealValue, fee);

        document.getElementById("sentence").innerHTML = sentence;

    }

    function getSentence(dealValue, fee) {
        return("The fee for me to middleman a deal worth $"+dealValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')+" will be $"+fee.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))+", so $"+(dealValue+fee).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')+" total.";
    }


