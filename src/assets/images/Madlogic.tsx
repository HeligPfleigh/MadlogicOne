import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  G,
  Mask,
  Use,
} from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg viewBox="0 0 312 104" {...props}>
      <Defs>
        <LinearGradient
          x1="-15.098%"
          y1="-20.768%"
          x2="63.046%"
          y2="71.202%"
          id="prefix__b">
          <Stop stopColor="#5F0B00" offset="0%" />
          <Stop stopColor="#5F0B00" offset="25.868%" />
          <Stop stopColor="#941004" offset="50.611%" />
          <Stop stopColor="#941004" offset="51.33%" />
          <Stop stopColor="#E30613" offset="68.382%" />
          <Stop stopColor="#E30613" offset="91.075%" />
          <Stop stopColor="#E30613" offset="93.178%" />
          <Stop stopColor="#E30613" offset="100%" />
        </LinearGradient>
        <LinearGradient x1="0%" y1="50%" x2="99.999%" y2="50%" id="prefix__e">
          <Stop stopColor="#AE0F0A" offset="0%" />
          <Stop stopColor="#E30613" offset="10.644%" />
          <Stop stopColor="#E30613" offset="52.977%" />
          <Stop stopColor="#E30613" offset="64.058%" />
          <Stop stopColor="#E30613" offset="100%" />
        </LinearGradient>
        <LinearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="prefix__h">
          <Stop stopColor="#AE0F0A" offset="0%" />
          <Stop stopColor="#E30613" offset="10.644%" />
          <Stop stopColor="#E30613" offset="52.977%" />
          <Stop stopColor="#E30613" offset="64.058%" />
          <Stop stopColor="#E30613" offset="100%" />
        </LinearGradient>
        <LinearGradient
          x1="115.099%"
          y1="-18.893%"
          x2="36.954%"
          y2="70.64%"
          id="prefix__k">
          <Stop stopColor="#5F0B00" offset="0%" />
          <Stop stopColor="#5F0B00" offset="25.868%" />
          <Stop stopColor="#941004" offset="50.611%" />
          <Stop stopColor="#941004" offset="51.33%" />
          <Stop stopColor="#E30613" offset="68.382%" />
          <Stop stopColor="#E30613" offset="91.075%" />
          <Stop stopColor="#E30613" offset="93.178%" />
          <Stop stopColor="#E30613" offset="100%" />
        </LinearGradient>
        <Path
          d="M25.927 24.897L1.775 11.03c-.72-.387-.922-.743-.922-1.133.032-.28.135-.467.834-.885L17.135.134l13.296 20.234c1.517 2.355-.403 5.039-2.763 5.039a3.314 3.314 0 01-1.74-.51"
          id="prefix__a"
        />
        <Path
          d="M.853 2.217C.853.616 2.613-.385 4.02.415l23.86 13.569a2.065 2.065 0 010 3.602L1.69 32.547c-.7.417-.804.603-.836.883V2.217z"
          id="prefix__d"
        />
        <Path
          d="M27.519 32.547L1.327 17.587a2.065 2.065 0 010-3.603L25.187.415c1.408-.8 3.168.2 3.168 1.802V33.43c-.032-.28-.135-.466-.836-.883"
          id="prefix__g"
        />
        <Path
          d="M1.4 20.368L14.876.134l15.658 8.878c.708.418.812.605.845.885 0 .39-.205.746-.935 1.133L5.965 24.897a3.392 3.392 0 01-1.764.51c-2.392 0-4.338-2.684-2.8-5.04"
          id="prefix__j"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="#FFF" d="M-51-154h414v896H-51z" />
        <Path fill="#FFF" d="M0 0h312v104H0z" />
        <G fill="#1D1D1B" fillRule="nonzero">
          <Path d="M108.332 37.948c-3.749 0-6.741 1.433-8.904 4.263-1.75-2.792-4.63-4.263-8.365-4.263-2.893 0-5.4.961-7.304 2.79v-2.456h-4.7v28.105h4.7V49.163c0-4.397 2.34-6.921 6.422-6.921 4.07 0 6.31 2.459 6.31 6.921v17.224h4.702V48.718c0-3.994 2.461-6.476 6.422-6.476 4.07 0 6.311 2.459 6.311 6.921v17.224h4.702V48.496c0-3.26-1.022-5.913-3.036-7.887-1.762-1.716-4.34-2.661-7.26-2.661M165.917 62.542c-5.727 0-6.498-5.07-6.498-10.031 0-4.962.771-10.034 6.498-10.034 5.664 0 6.444 4.824 6.444 10.034 0 5.21-.78 10.031-6.444 10.031zm6.444-21.475c-2.332-2.493-4.89-2.859-7.33-2.859-2.763 0-5.342.929-6.902 2.485-3.073 3.07-3.428 8.214-3.428 11.818 0 3.601.355 8.745 3.428 11.816 1.558 1.557 4.139 2.485 6.903 2.485 2.335 0 5.005-.372 7.384-2.957v2.625h4.662V30.798h-4.717v10.27zM190.94 58.437V30.553h-4.745v28.049c0 4.761 2.74 7.604 7.328 7.604h3.263V62.05h-2.54c-2.41 0-3.306-.98-3.306-3.613M206.559 44.109c1.234-1.243 2.85-1.9 4.675-1.9 1.832 0 3.513.675 4.73 1.9 1.896 1.91 2.055 5.246 2.055 8.223 0 2.976-.159 6.313-2.055 8.222-1.217 1.225-2.898 1.9-4.73 1.9-1.824 0-3.441-.657-4.675-1.9-1.856-1.868-2.111-5.055-2.111-8.222s.255-6.356 2.11-8.223m4.676-6.209c-3.182 0-5.974 1.118-8.08 3.235-3.022 3.104-3.43 7.403-3.43 11.197 0 3.794.408 8.09 3.433 11.198 2.103 2.116 4.896 3.233 8.077 3.233s5.973-1.117 8.078-3.236c3.024-3.103 3.43-7.401 3.43-11.195 0-3.794-.406-8.093-3.432-11.198-2.102-2.116-4.894-3.234-8.076-3.234M239.812 42.02c5.53 0 6.293 4.742 6.293 9.865 0 5.122-.762 9.863-6.293 9.863-5.595 0-6.35-4.987-6.35-9.863 0-4.878.755-9.865 6.35-9.865zm6.348-1.376c-2.286-2.543-4.786-2.916-7.167-2.916-2.723 0-5.265.934-6.8 2.498-2.994 3.053-3.378 7.835-3.378 11.659 0 3.824.384 8.605 3.378 11.657 1.57 1.6 4.09 2.554 6.746 2.554 2.247 0 4.823-.367 7.166-2.93v3.286c0 5.103-2.553 8.03-7.003 8.03-2.966 0-4.221-.844-6.197-2.632l-.251-.229-3.077 3.07.284.263c3.055 2.814 5.414 3.764 9.35 3.764 6.904 0 11.542-4.863 11.542-12.1V38.062h-4.593v2.582zM260.001 66.254h4.805v-27.97H260zM289.994 59.153c-1.986 2.24-3.477 2.994-5.911 2.994-2.549 0-4.602-1.023-5.942-2.963-1.194-1.69-1.681-3.757-1.681-7.128 0-3.373.487-5.438 1.684-7.133 1.338-1.936 3.391-2.96 5.939-2.96 2.471 0 3.963.743 5.911 2.939l.247.277 3.21-3.065-.244-.267c-2.814-3.086-5.201-4.178-9.124-4.178-7.577 0-12.283 5.513-12.283 14.387s4.706 14.386 12.283 14.386c3.923 0 6.31-1.092 9.124-4.178l.242-.266-3.205-3.126-.25.28zM136.691 62.5c-1.82 0-3.435-.657-4.668-1.9-1.852-1.868-2.108-5.055-2.108-8.222s.256-6.356 2.108-8.223c1.233-1.244 2.847-1.901 4.668-1.901 5.624 0 6.777 4.048 6.777 10.124 0 6.249-1.134 10.122-6.777 10.122m11.383-11.866l.073-.004c-.194-4.324-1.24-7.238-3.388-9.449l-.003-.001c-2.099-2.116-4.887-3.234-8.065-3.234s-5.966 1.118-8.067 3.235c-3.019 3.104-3.425 7.402-3.425 11.197 0 3.794.406 8.09 3.427 11.198 2.1 2.115 4.888 3.233 8.065 3.233 2.73 0 4.905-.943 6.776-2.952v2.616h4.718l-.014-8.097c-.012-5.373-.015-7.139-.097-7.742M303.024 33.98h-1.18v2.214h1.18c.702 0 1.196-.462 1.196-1.099s-.494-1.114-1.196-1.114zm1.228 5.54l-1.451-2.578h-.957v2.579h-.878V33.2h2.154c1.1 0 1.994.828 1.994 1.894 0 .923-.575 1.496-1.356 1.736l1.516 2.69h-1.022zm-1.403-8.071c-2.68 0-4.85 2.213-4.85 4.92 0 2.706 2.17 4.92 4.85 4.92 2.68 0 4.866-2.214 4.866-4.92 0-2.707-2.186-4.92-4.866-4.92zm0 10.683a5.767 5.767 0 01-5.775-5.763 5.768 5.768 0 015.775-5.764c3.19 0 5.774 2.58 5.774 5.764a5.766 5.766 0 01-5.774 5.763z" />
        </G>
        <G transform="matrix(1 0 0 -1 36.314 55.372)">
          <Mask id="prefix__c" fill="#fff">
            <Use xlinkHref="#prefix__a" />
          </Mask>
          <Path
            d="M25.927 24.897L1.775 11.03c-.72-.387-.922-.743-.922-1.133.032-.28.135-.467.834-.885L17.135.134l13.296 20.234c1.517 2.355-.403 5.039-2.763 5.039a3.314 3.314 0 01-1.74-.51"
            fill="url(#prefix__b)"
            fillRule="nonzero"
            mask="url(#prefix__c)"
          />
        </G>
        <G transform="matrix(1 0 0 -1 36.314 79.04)">
          <Mask id="prefix__f" fill="#fff">
            <Use xlinkHref="#prefix__d" />
          </Mask>
          <Path
            d="M.853 2.217C.853.616 2.613-.385 4.02.415l23.86 13.569a2.065 2.065 0 010 3.602L1.69 32.547c-.7.417-.804.603-.836.883V2.217z"
            fill="url(#prefix__e)"
            fillRule="nonzero"
            mask="url(#prefix__f)"
          />
        </G>
        <G transform="matrix(1 0 0 -1 7.184 79.04)">
          <Mask id="prefix__i" fill="#fff">
            <Use xlinkHref="#prefix__g" />
          </Mask>
          <Path
            d="M27.519 32.547L1.327 17.587a2.065 2.065 0 010-3.603L25.187.415c1.408-.8 3.168.2 3.168 1.802V33.43c-.032-.28-.135-.466-.836-.883"
            fill="url(#prefix__h)"
            fillRule="nonzero"
            mask="url(#prefix__i)"
          />
        </G>
        <G transform="matrix(1 0 0 -1 4.16 55.372)">
          <Mask id="prefix__l" fill="#fff">
            <Use xlinkHref="#prefix__j" />
          </Mask>
          <Path
            d="M1.4 20.368L14.876.134l15.658 8.878c.708.418.812.605.845.885 0 .39-.205.746-.935 1.133L5.965 24.897a3.392 3.392 0 01-1.764.51c-2.392 0-4.338-2.684-2.8-5.04"
            fill="url(#prefix__k)"
            fillRule="nonzero"
            mask="url(#prefix__l)"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
