<template>
  <svg
    id="logo"
    width="313"
    height="170"
    viewBox="0 0 313 170"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="1"
      d="M233.036 84.9449L190.819 59.5382C188.132 57.9092 185.416 56.4055 182.789 54.7138C170.153 46.788 165.666 32.5966 171.57 19.5017C174.554 13.2212 179.643 8.35103 185.837 5.84712C192.031 3.34321 198.883 3.38636 205.049 5.96816C209.203 7.84895 213.228 10.0368 217.094 12.5156C243.457 28.1794 269.703 43.8432 296.184 59.0997C306.429 65.0206 313.396 72.8838 312.983 85.6341C312.569 98.3844 305.1 106.655 294.088 111.291C285.805 113.113 277.179 111.39 270.086 106.498C257.894 99.1362 245.465 92.1189 233.036 84.9449Z"
      stroke="white"
      stroke-width="1"
    />
    <path
      id="2"
      d="M79.8547 84.2098L129.568 114.027C139.782 120.271 145.302 130.793 143.738 141.315C142.927 147.053 140.429 152.376 136.598 156.528C132.767 160.681 127.798 163.452 122.394 164.451C116.328 165.784 110.011 164.67 104.682 161.329C73.9801 143.407 43.3081 125.486 12.7541 107.283C8.50993 104.958 5.03273 101.325 2.78205 96.8655C0.531369 92.4058 -0.386845 87.3287 0.14876 82.3052C1.18199 70.1286 8.06032 62.2918 18.8944 58.2329C19.5856 57.8879 20.2474 57.4805 20.8723 57.0152C29.6785 56.7767 38.3492 59.3439 45.7583 64.3837C56.8876 71.1277 68.5483 77.4658 79.8547 84.2098Z"
      stroke="white"
      stroke-width="1"
    />
    <path
      id="3"
      d="M229.027 89C241.381 96.1833 253.794 103.21 266.03 110.581C273.113 115.48 281.728 117.205 290 115.381L220.536 157.006C215.17 160.143 209.833 163.468 204.349 166.417C201.255 168.255 197.846 169.416 194.323 169.829C190.8 170.243 187.236 169.902 183.839 168.826C180.442 167.75 177.282 165.961 174.546 163.565C171.81 161.168 169.552 158.213 167.907 154.873C161.303 141.636 166.227 126.642 179.878 118.455L229.027 89Z"
      stroke="white"
      stroke-width="1"
    />
    <path
      id="4"
      d="M83.978 81C72.5715 74.3651 61.047 67.9817 49.8468 60.9694C42.4494 55.8937 33.7924 53.308 25 53.5483L92.1718 13.1097C97.5361 9.96519 102.871 6.63199 108.324 3.67614C114.474 -0.0083231 121.735 -0.968836 128.543 1.00135C135.351 2.97154 141.162 7.71485 144.724 14.2103C151.798 27.7003 147.171 42.9198 133.2 51.4415C116.901 61.1581 100.395 70.969 83.978 81Z"
      stroke="white"
      stroke-width="1"
    />
  </svg>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  width: 100%;
  height: 100vh;
  background-color: rgb(32, 35, 48);
}
#logo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#logo path:nth-child(1) {
  stroke-dasharray: 379.7756652832031;
  stroke-dashoffset: 379.7756652832031;
  animation: line-anim 2s ease forwards 0.3s, fill-a 2s ease forwards 1.8s;
}
#logo path:nth-child(2) {
  stroke-dasharray: 379.46026611328125;
  stroke-dashoffset: 379.46026611328125;
  animation: line-anim 2s ease forwards 0.3s, fill-b 2s ease forwards 1.8s;
}
#logo path:nth-child(3) {
  stroke-dasharray: 310.4255676269531;
  stroke-dashoffset: 310.4255676269531;
  animation: line-anim 2s ease forwards 0.9s, fill-c 2s ease forwards 1.8s;
}
#logo path:nth-child(4) {
  stroke-dasharray: 306.1224060058594;
  stroke-dashoffset: 306.1224060058594;
  animation: line-anim 2s ease forwards 0.9s, fill-d 2s ease forwards 1.8s;
}

@keyframes line-anim {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes fill {
  from {
    fill: transparent;
  }
  to {
    fill: #fff;
  }
}

@keyframes fill-a {
  from {
    fill: transparent;
  }
  to {
    fill: #34a853;
  }
}
@keyframes fill-b {
  from {
    fill: transparent;
  }
  to {
    fill: #4285f4;
  }
}
@keyframes fill-c {
  from {
    fill: transparent;
  }
  to {
    fill: #fbbc04;
  }
}
@keyframes fill-d {
  from {
    fill: transparent;
  }
  to {
    fill: #ea4335;
  }
}
</style>
