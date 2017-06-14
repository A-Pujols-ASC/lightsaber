<!DOCTYPE html>
<html>
<head>
    <!-- FIX BUTTON -->
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
    <script>
        var roomId = "<%= room %>";
    </script>
    <script src="/libs/socket.io-1.3.7.js"></script>
    <script src="/libs/three.min.js"></script>
    <script src="/libs/DeviceOrientationController.js"></script>
    <script src="/libs/OrbitControls.js"></script>
    <script src="/libs/StereoEffect.js"></script>
    <script src="/libs/jquery-2.1.4.min.js"></script>
    <script src="/js/bundle.js"></script>
    <script src="/js/mysql.js"></script>
    <script>
        var isMobile;
        isMobile = false;
        if (/Mobi/.test(navigator.userAgent)) {
            isMobile = true;
        }
    </script>
    <style>
        body {
            text-align: center;
            margin: 0;
            background-color: #000000;
            font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
            font-weight: 300;
            color: white;
        }
        img.displayed {
            display: block;
            margin-right:auto;
            margin-left:auto;
        }
        table,
        th,
        td {
            border-collapse: collapse;
            padding: 15px;
        }
        a {
            color: white;
        }
        canvas {
            bottom: 0;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: black;
        }
        .confirm-button {
            width: 75%;
            color: white;
            border-radius: 10px;
            background-color: #22c6ef;
            display: none;
            margin: 10px;
            padding: 15px;
            transition: background-color .5s;
        }
        .confirm-button span {
            padding: 10px;
            font-size: 18px;
        }
        .confirm-button:hover {
            background-color: rgba(34, 198, 239, 0.68);
            cursor: pointer;
        }       
        .lightsaber {
            cursor: pointer;
        }
        .landing {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .align-item {
            max-width: 80%;
        }
        .font{
            font-family: Poppins;
            font-size: 32px;
        }
        .saber{
            opacity: 0.5;
            transition: opacity .5s;
        }
        .saber:hover{
            opacity: 1;
        }
        #qrcode{
            margin-top: 20px;
            margin-bottom: 20px;
            border-color: #22c6ef;
            border-radius: 10px;
            border-style: solid;
        }
        #room-url {
        }
        #room-url a {
            text-decoration: none;
        }
        #score {
            z-index: 1;
            position: absolute;
            right: 15%;
            top: 10%;
        }
        #scoretitle {
            z-index: 1;
            position: absolute;
            right: 15%;
            top: 3%;
        }
        #intromessage{
            z-index: 1;
            position: absolute;
            right: 15%;
            top: 20%;
        }
        #outromessage{
            z-index: 1;
            position: absolute;
            right: 15%;
            top: 40%;
        }
        .statbar{
            z-index: 1;
            position: absolute;
            display: none;
        }
    </style>
</head>
<body>
    <div class="landing">
        <div class="align-item">
            <center>
                <img class="displayed" src="/textures/allstarwars.png" width="250px" align="middle">
                <p>First, select the lightsaber you would like to wield.</p>
                <table style="width:50%">
                    <tr>
                        <td class="saber" id="blueSaber"><img onClick="changeBlue()" class="lightsaber displayed" src="/textures/bluesaber.png"></td>
                        <td class="saber" id="greenSaber"><img onClick="changeGreen()" class="lightsaber displayed" src="/textures/greensaber.png"></td>
                        <td class="saber" id="redSaber"><img onClick="changeRed()" class="lightsaber displayed" src="/textures/redsaber.png"></td>
                    </tr>
                </table>
                <p>Next, enter the website or scan the QR code on a mobile device to begin.</p>
                <img id="qrcode" src="">
                <span style="color:#47dcff; font-size: 26px;" id="room-url"><div style="padding-bottom:25px;" id="room-link"><%= roomURL %></div></span>
                <div class="confirm-button">
                    <span><b>CONNECTED!</b></span>
                    <span><br>Click here to begin.<br/></span>
                </div>
            </center>
        </div>
    </div>
    <div id="container">
        <div style="z-index: 1">
            <div class="font">
                <h4 id="scoretitle" style="display:none;">Score</h4>
                <p id="score" style="display:none;">0</p>
                <p id="intromessage" style="display: none">INTRO</p>
                <p id="outromessage" style="display: none">OUTRO</p>
                <h4 class="statbar" id="timertitle" style="left: 15%; top: 3%;">Timer</h4>
                <p class="statbar" id="timer" style="left: 15%; top: 10%;">0</p>
                <h4 class="statbar" id="scoretitle" style="right: 15%; top: 3%;">Score</h4>
                <p class="statbar" id="score" style="right: 15%; top: 10%;">0</p>
            </div>
        </div>
    </div>
    <script>
        var qrimg = document.getElementById("room-link").innerHTML; document.getElementById("qrcode").src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data="+qrimg;
    </script>
</body>
