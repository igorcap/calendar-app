import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  src: url("../fonts/open-sans-v13-latin-regular.eot"); /* IE9 Compat Modes */
  src: local("Open Sans"), local("OpenSans"),
    url("../fonts/open-sans-v13-latin-regular.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("../fonts/open-sans-v13-latin-regular.woff2")
      format("woff2"),
    /* Super Modern Browsers */ url("../fonts/open-sans-v13-latin-regular.woff")
      format("woff"),
    /* Modern Browsers */ url("../fonts/open-sans-v13-latin-regular.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("../fonts/open-sans-v13-latin-regular.svg#OpenSans") format("svg"); /* Legacy iOS */
  padding: 100px;
  padding-left: 50px;
  margin: 20px auto;
  background: #f76d1d; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    top,
    #fad961,
    #f76d1d
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    top,
    #fad961,
    #f76d1d
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
