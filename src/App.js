import logo from "./logo.svg";
import "./App.css";

function App() {
  const court = () => {
    return (
      <>
        <svg
          viewBox="0,0,540,570"
          preserveAspectRatio="xMidYMid meet"
          style="background:#ffffff"
        >
          <g class="title" transform="translate(5, 21)">
            <text font-family="Roboto">MIL vs CHA on 01/10/2022</text>
          </g>
          <g class="footer" transform="translate(10, 560)">
            <text font-family="Roboto">
              <tspan>FG%: </tspan>
              <tspan font-weight="800">44%</tspan>
              <tspan> (37/84)</tspan>
            </text>
          </g>
          <g>
            <g class="legend" transform="translate(520, 560)">
              <text text-anchor="end" font-family="Roboto">
                Miss
              </text>
              <path
                transform="translate(-44, -6)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
              <text
                transform="translate(-80, 0)"
                text-anchor="end"
                font-family="Roboto"
              >
                Made
              </text>
              <path
                transform="translate(-130, -6)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
          </g>
          <g class="court" transform="translate(20, 50)">
            <rect
              fill="#f3f7fd"
              x="-20"
              y="-20"
              width="540"
              height="510"
            ></rect>
            <g class="markings">
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style="stroke-linecap:round"
                d="M470,0v140"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style="stroke-linecap:round"
                d="M30,0v140"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style="stroke-linecap:round"
                d="M330,0v190"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style="stroke-linecap:round"
                d="M170,0v190"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style="stroke-linecap:round"
                d="M310,0v190"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style="stroke-linecap:round"
                d="M190,0v190"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style="stroke-linecap:round"
                d="M330,190H170"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style="stroke-linecap:round"
                d="M280,40h-60"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style="stroke-linecap:round"
                d="M250,40v2.5"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style="stroke-linecap:round"
                d="M290,40v10"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style="stroke-linecap:round"
                d="M210,40v10"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style="stroke-linecap:round"
                d="M250,42.5c4.1,0,7.5,3.4,7.5,7.5s-3.4,7.5-7.5,7.5s-7.5-3.4-7.5-7.5S245.9,42.5,250,42.5z"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style="stroke-linecap:round"
                d="M0,0v470h190c0-33.1,26.9-60,60-60s60,26.9,60,60h190V0H0z"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style="stroke-linecap:round"
                d="M250,410c-33.1,0-60,26.9-60,60h40c0-11,9-20,20-20s20,9,20,20h40C310,436.9,283.1,410,250,410z"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style="stroke-linecap:round"
                d="M250,450c-11,0-20,9-20,20h40C270,459,261,450,250,450z"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style="stroke-linecap:round"
                d="M310,190c0,33.1-26.9,60-60,60s-60-26.9-60-60c0,33.1,26.9,60,60,60S310,223.1,310,190z"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style="stroke-dasharray:5,10"
                d="M310,190c0-33.1-26.9-60-60-60s-60,26.9-60,60c0-33.1,26.9-60,60-60S310,156.9,310,190z"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style="stroke-linecap:round"
                d="M290,50c0,22.1-17.9,40-40,40s-40-17.9-40-40c0,22.1,17.9,40,40,40S290,72.1,290,50z"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style="stroke-linecap:round"
                d="M469.8,139.9c-49.7,121.4-188.3,179.6-309.7,129.9c-59-24.1-105.8-70.9-129.9-129.9 c49.7,121.4,188.3,179.6,309.7,129.9C398.9,245.7,445.7,198.9,469.8,139.9z"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style="stroke-linecap:round"
                d="M140,0v5"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style="stroke-linecap:round"
                d="M359.9,0v5"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style="stroke-linecap:round"
                d="M470,281.6h30"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style="stroke-linecap:round"
                d="M0,286.7h30"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style=""
                d="M170,69.8h-10"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style=""
                d="M170,79.9h-10"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style=""
                d="M170,109.9h-10"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style=""
                d="M170,140h-10"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style=""
                d="M340,69.8h-10"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style=""
                d="M340,79.9h-10"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                style=""
                d="M340,109.9h-10"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                d="M0,140h30"
              ></path>
              <path
                class="mark"
                fill="none"
                stroke="#1d428a"
                stroke-width="2.6"
                d="M470,139.9h30"
              ></path>
            </g>
            <g class="shot">
              <title>
                MISS Middleton 26' 3PT Step Back Jump Shot Q1 - 11:11
              </title>
              <path
                transform="translate(26.000000000000014, 172.99999999999997)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>Antetokounmpo 1' Dunk (2 PTS) Q1 - 10:51</title>
              <path
                transform="translate(260, 61)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Antetokounmpo 26' 3PT Jump Shot Q1 - 10:22</title>
              <path
                transform="translate(358, 285)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Matthews 26' 3PT Jump Shot (3 PTS) (Antetokounmpo 1 AST) Q1 -
                09:59
              </title>
              <path
                transform="translate(141, 289)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Nwora 27' 3PT Jump Shot Q1 - 09:43</title>
              <path
                transform="translate(75, 250)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Nwora 4' Driving Floating Jump Shot (2 PTS) (Middleton 1 AST) Q1
                - 08:52
              </title>
              <path
                transform="translate(245, 86)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Nwora 25' 3PT Jump Shot (5 PTS) (Middleton 2 AST) Q1 - 08:25
              </title>
              <path
                transform="translate(382, 267)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Antetokounmpo 6' Turnaround Fadeaway (4 PTS) Q1 - 08:00
              </title>
              <path
                transform="translate(200, 79)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Middleton 27' 3PT Pullup Jump Shot (3 PTS) (Nwora 1 AST) Q1 -
                07:41
              </title>
              <path
                transform="translate(235, 315)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Middleton 9' Driving Floating Jump Shot (5 PTS) (Antetokounmpo 2
                AST) Q1 - 07:09
              </title>
              <path
                transform="translate(158, 58)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS DiVincenzo 25' 3PT Jump Shot Q1 - 06:41</title>
              <path
                transform="translate(349, 283)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS DiVincenzo 24' 3PT Jump Shot Q1 - 06:17</title>
              <path
                transform="translate(486.99999999999994, 50)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Portis 3PT Jump Shot Q1 - 05:12</title>
              <path
                transform="translate(478, 67)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Middleton 3PT Jump Shot Q1 - 04:53</title>
              <path
                transform="translate(480, 66)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Galloway 3PT Jump Shot Q1 - 04:10</title>
              <path
                transform="translate(21.999999999999993, 97.99999999999999)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS DiVincenzo 26' 3PT Jump Shot Q1 - 03:36</title>
              <path
                transform="translate(415, 250)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Connaughton 27' 3PT Jump Shot Q1 - 03:16</title>
              <path
                transform="translate(314, 312)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                MISS Middleton 13' Turnaround Fadeaway Shot Q1 - 02:26
              </title>
              <path
                transform="translate(225, 175.99999999999997)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Connaughton 27' 3PT Jump Shot Q1 - 02:08</title>
              <path
                transform="translate(441, 247.00000000000003)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Mamukelashvili 2' Layup (2 PTS) (Middleton 3 AST) Q1 - 01:30
              </title>
              <path
                transform="translate(239, 63)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Middleton 26' 3PT Pullup Jump Shot Q1 - 58.6</title>
              <path
                transform="translate(112.00000000000001, 266)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                MISS Antetokounmpo 32' 3PT Pullup Jump Shot Q1 - 2.3
              </title>
              <path
                transform="translate(251, 365)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Matthews 10' Floating Jump Shot (5 PTS) (Antetokounmpo 3 AST) Q2
                - 11:38
              </title>
              <path
                transform="translate(233, 149)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Portis 3PT Jump Shot Q2 - 10:41</title>
              <path
                transform="translate(477, 57.00000000000001)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>Nwora 3PT Jump Shot (8 PTS) (Hood 1 AST) Q2 - 10:32</title>
              <path
                transform="translate(25, 77)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Antetokounmpo 15' Pullup Jump Shot Q2 - 10:02</title>
              <path
                transform="translate(143, 160)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Antetokounmpo 20' Pullup Jump Shot Q2 - 08:40</title>
              <path
                transform="translate(245, 252)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                MISS Matthews 8' Driving Floating Jump Shot Q2 - 07:48
              </title>
              <path
                transform="translate(297, 109)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Hood 3PT Jump Shot (3 PTS) (Antetokounmpo 4 AST) Q2 - 07:05
              </title>
              <path
                transform="translate(21.000000000000014, 68)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Portis 20' Jump Shot (2 PTS) (Matthews 1 AST) Q2 - 05:47
              </title>
              <path
                transform="translate(431, 125)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Portis 11' Floating Jump Shot Q2 - 05:17</title>
              <path
                transform="translate(229, 156)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS DiVincenzo 3PT Jump Shot Q2 - 04:45</title>
              <path
                transform="translate(21.000000000000014, 65)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Portis 3' Layup Q2 - 04:42</title>
              <path
                transform="translate(225, 72)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                MISS DiVincenzo 4' Driving Floating Bank Jump Shot Q2 - 03:32
              </title>
              <path
                transform="translate(213, 73)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Mamukelashvili 2' Layup Q2 - 02:06</title>
              <path
                transform="translate(262, 67)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>Middleton 2' Putback Layup (11 PTS) Q2 - 02:00</title>
              <path
                transform="translate(255, 68)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Nwora 27' 3PT Jump Shot (11 PTS) (Middleton 4 AST) Q2 - 01:38
              </title>
              <path
                transform="translate(397, 280)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                MISS Middleton 8' Turnaround Fadeaway Shot Q2 - 01:16
              </title>
              <path
                transform="translate(312, 102.00000000000001)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Antetokounmpo 27' 3PT Jump Shot (11 PTS) (Middleton 5 AST) Q2 -
                28.5
              </title>
              <path
                transform="translate(185, 310)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Portis 9' Turnaround Jump Shot Q3 - 11:39</title>
              <path
                transform="translate(255, 139)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Antetokounmpo 19' Pullup Jump Shot Q3 - 11:02</title>
              <path
                transform="translate(217, 237.99999999999997)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Matthews 3PT Jump Shot (8 PTS) (Middleton 6 AST) Q3 - 10:38
              </title>
              <path
                transform="translate(21.999999999999993, 58.99999999999999)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Middleton 25' 3PT Jump Shot (14 PTS) (Portis 1 AST) Q3 - 10:01
              </title>
              <path
                transform="translate(400, 256)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Matthews 26' 3PT Jump Shot (11 PTS) (Middleton 7 AST) Q3 - 09:39
              </title>
              <path
                transform="translate(279, 312)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Antetokounmpo 1' Layup (13 PTS) (Middleton 8 AST) Q3 - 08:45
              </title>
              <path
                transform="translate(243, 51.00000000000001)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Antetokounmpo 7' Hook Shot (15 PTS) (Portis 2 AST) Q3 - 08:08
              </title>
              <path
                transform="translate(268, 118.99999999999999)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Nwora 26' 3PT Jump Shot Q3 - 07:29</title>
              <path
                transform="translate(142, 286)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>Portis 2' Putback Layup (5 PTS) Q3 - 07:24</title>
              <path
                transform="translate(263, 64)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Middleton 16' Fadeaway Jumper Q3 - 06:44</title>
              <path
                transform="translate(410.99999999999994, 48.99999999999999)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Middleton 10' Pullup Jump Shot Q3 - 06:11</title>
              <path
                transform="translate(287, 145)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Connaughton 3PT Jump Shot Q3 - 05:25</title>
              <path
                transform="translate(16.999999999999993, 59.99999999999999)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                MISS DiVincenzo 26' 3PT Step Back Jump Shot Q3 - 04:16
              </title>
              <path
                transform="translate(36.000000000000014, 191)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS DiVincenzo 25' 3PT Jump Shot Q3 - 03:40</title>
              <path
                transform="translate(437.99999999999994, 218)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Galloway 3PT Jump Shot Q3 - 03:16</title>
              <path
                transform="translate(25, 56)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Mamukelashvili 3PT Jump Shot Q3 - 02:58</title>
              <path
                transform="translate(480, 55)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Hood 27' 3PT Jump Shot (6 PTS) (Antetokounmpo 5 AST) Q3 - 02:40
              </title>
              <path
                transform="translate(281, 319)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Hood 27' 3PT Jump Shot Q3 - 01:40</title>
              <path
                transform="translate(223, 314)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>Nwora Tip Dunk Shot (13 PTS) Q3 - 01:34</title>
              <path
                transform="translate(250, 50)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Mamukelashvili 7' Jump Shot Q3 - 01:10</title>
              <path
                transform="translate(250, 117.99999999999999)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Nwora 6' Driving Floating Jump Shot (15 PTS) (Antetokounmpo 6
                AST) Q3 - 49.2
              </title>
              <path
                transform="translate(273, 108.00000000000001)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>Nwora 3PT Jump Shot (18 PTS) Q3 - 25.0</title>
              <path
                transform="translate(26.999999999999993, 54.00000000000001)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Nwora 30' 3PT Jump Shot Q4 - 11:33</title>
              <path
                transform="translate(245, 348)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Middleton 19' Jump Shot Q4 - 11:00</title>
              <path
                transform="translate(419, 138)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Matthews 3PT Jump Shot Q4 - 10:35</title>
              <path
                transform="translate(479, 80)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>Middleton 9' Jump Shot (16 PTS) Q4 - 09:44</title>
              <path
                transform="translate(303, 122)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>Middleton 13' Pullup Jump Shot (18 PTS) Q4 - 09:19</title>
              <path
                transform="translate(229, 174)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Middleton 25' 3PT Jump Shot (21 PTS) (Antetokounmpo 7 AST) Q4 -
                08:14
              </title>
              <path
                transform="translate(135, 274)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Connaughton 27' 3PT Jump Shot Q4 - 07:39</title>
              <path
                transform="translate(375, 289)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>Middleton 18' Fadeaway Jumper (23 PTS) Q4 - 07:33</title>
              <path
                transform="translate(425, 56)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Antetokounmpo 26' 3PT Jump Shot Q4 - 06:52</title>
              <path
                transform="translate(145, 289)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Antetokounmpo 1' Layup (18 PTS) (Middleton 9 AST) Q4 - 06:28
              </title>
              <path
                transform="translate(248, 61)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Middleton 8' Driving Floating Bank Jump Shot (25 PTS)
                (Antetokounmpo 8 AST) Q4 - 05:55
              </title>
              <path
                transform="translate(175, 77)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS DiVincenzo 3PT Jump Shot Q4 - 05:21</title>
              <path
                transform="translate(484, 70)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Connaughton 25' 3PT Jump Shot Q4 - 05:15</title>
              <path
                transform="translate(130, 270)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Antetokounmpo 1' Running Layup (20 PTS) (Middleton 10 AST) Q4 -
                04:54
              </title>
              <path
                transform="translate(240, 48.99999999999999)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Connaughton 8' Jump Shot Q4 - 04:25</title>
              <path
                transform="translate(248, 128)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>Antetokounmpo Tip Layup Shot (22 PTS) Q4 - 04:21</title>
              <path
                transform="translate(250, 50)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Middleton 10' Jump Shot (27 PTS) (Matthews 2 AST) Q4 - 03:55
              </title>
              <path
                transform="translate(147, 56)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                MISS Antetokounmpo 28' 3PT Pullup Jump Shot Q4 - 03:22
              </title>
              <path
                transform="translate(240, 327.99999999999994)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                Antetokounmpo 1' Driving Dunk (24 PTS) (Middleton 11 AST) Q4 -
                02:39
              </title>
              <path
                transform="translate(252, 63)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>
                MISS Antetokounmpo 14' Step Back Jump Shot Q4 - 02:02
              </title>
              <path
                transform="translate(113, 55)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>MISS Middleton 25' 3PT Pullup Jump Shot Q4 - 01:26</title>
              <path
                transform="translate(344, 287)"
                d="M -5,-5 L 5,5 M 5,-5 L -5,5"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(187, 0, 0, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>Antetokounmpo 5' Driving Layup (26 PTS) Q4 - 38.8</title>
              <path
                transform="translate(300, 58.99999999999999)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
            <g class="shot">
              <title>Matthews 3' Layup (13 PTS) Q4 - 35.4</title>
              <path
                transform="translate(263, 77)"
                d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
                fill="rgba(255,255,255, 0.1"
                stroke="rgba(10, 158, 117, 0.8)"
                stroke-width="3"
              ></path>
            </g>
          </g>
          <g class="watermark" transform="translate(520, 520)">
            <text
              text-anchor="end"
              dy="-5"
              dx="-5"
              font-size="22px"
              font-weight="600"
              font-family="Roboto"
            >
              NBA.com
            </text>
          </g>
        </svg>
      </>
    );
  };

  return <div className="App">{court()}</div>;
}

export default App;
