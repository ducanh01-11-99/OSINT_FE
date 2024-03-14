import styled from 'styled-components';
import { Form } from 'antd';
import { normalTheme } from '../../../themes/normalTheme';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;
const Header = styled.div`
  font-size: ${normalTheme.fontSizes.xxLarge};
  font-weight: ${normalTheme.fontWeight.regular};
  color: ${normalTheme.colors.main};
  height: 37px;
  display: flex;
  align-items: center;
  margin: 50px 0;
`;
const DivRight = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.background});
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media only screen and (min-width: 0px) {
    align-items: center;
  }
  @media only screen and (min-width: 992px) {
    align-items: flex-end;
  }
  background-size: cover;
`;
const DivContentRight = styled.div`
  background: white;
  height: 618px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Small Devices, Tablets */
  @media only screen and (min-width: 0px) {
    width: 500px;
    padding: 24px 60px;
  }
  /* Medium Devices, Desktops */
  @media only screen and (min-width: 992px) {
    margin-right: 220px;
    width: 640px;
    padding: 60px 132px;
  }
`;
const ImgTitleRight = styled.img`
  width: 300px;
  //height: 101px;
`;
const FormInput = styled.form`
  padding-bottom: max(15px, 5%);
  width: 100%;
  height: 52%;
`;
const FormItem = styled(Form.Item)`
  width: 100%;
`;
const DivInputUsername = styled.div`
  height: 38px;
  font-size: 1em;
  font-style: normal;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  margin-bottom: 24px;
`;
const DivError = styled.div`
  font-style: normal;
  font-size: 1em;
  line-height: 19px;
  color: #dd281f;
`;
const DivInputPassword = styled.div`
  height: 38px;
  font-style: normal;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
`;
const DivOption = styled.div`
  height: 35px;
  margin-top: 7px;
  @media only screen and (min-width: 650px) {
    display: flex;
    justify-content: space-between;
  }
`;
const KeepingLogin = styled.div`
  display: flex;
`;
const InputRadio = styled.input`
  width: 19.16px;
  height: 20px;
  background: white;
  border: 1px solid rgba(215, 215, 215, 0.75);
  box-sizing: border-box;
`;
const SpanKeepingLogin = styled.span`
  font-style: normal;
  font-weight: ${normalTheme.fontWeight.regular};
  font-size: 1em;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.25);
  :hover {
    color: #212529;
  }
`;
const DivLinkForgotPassword = styled.div`
  /* Medium Devices, Desktops */
  text-align: center;
  display: flex;
  justify-content: center;
  /* Small Devices, Tablets */
  @media only screen and (max-width: 650px) {
    width: 100%;
  }
`;
const LinkForgotPassword = styled.a`
  font-style: normal;
  font-weight: ${normalTheme.fontWeight.regular};
  font-size: 1em;
  text-decoration: none;
  color: ${normalTheme.colors.main};
  height: 22px;
  display: flex;
  align-items: center;
  :hover {
    color: #212529;
  }
`;
const ButtonLoginUSB = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid #ff6e01;
  box-sizing: border-box;
  font-style: normal;
  font-weight: ${normalTheme.fontWeight.regular};
  font-size: 1.28571em;
  line-height: 25px;
  align-items: center;
  text-align: center;
  color: #ff6e01;
  margin-top: 10px;
  background: white;
  border-radius: 8px;
`;

export const ImageQr = styled.img`
  position: absolute;
  top: 24%;
  left: 18%;
  width: 100px;
  height: 100px;
  /* Medium Devices, Desktops */

  @media only screen and (min-width: 0px) {
    display: none;
  }

  @media only screen and (min-width: 992px) {
    display: block;
    top: 7%;
    left: 2%;
    width: 60px;
    height: 60px;
  }

  @media only screen and (min-width: 1200px) {
    display: block;
    top: 5%;
    left: 2%;
    width: 80px;
    height: 80px;
  }

  @media only screen and (min-width: 1220px) {
    display: block;
    top: 5%;
    left: 2%;
    width: 80px;
    height: 80px;
  }

  @media only screen and (min-width: 1350px) {
    display: block;
    top: 5%;
    left: 2%;
    width: 90px;
    height: 90px;
  }

  @media only screen and (min-width: 1500px) {
    display: block;
    top: 5%;
    left: 2%;
    width: 90px;
    height: 90px;
  }

  @media only screen and (min-width: 1600px) {
    display: block;
    top: 5%;
    left: 2%;
    width: 90px;
    height: 90px;
  }

  @media only screen and (min-width: 1750px) {
    display: block;
    top: 6%;
    left: 2%;
    width: 90px;
    height: 90px;
  }

  @media only screen and (min-width: 1900px) {
    display: block;
    top: 5%;
    left: 2%;
    width: 90px;
    height: 90px;
  }
`;
export const DivBoxQr = styled.div`
  position: absolute;
  top: 24%;
  left: 10%;
  height: 100px;
  width: 350px;
  border-radius: 12px;
  border: 1px solid black;

  @media only screen and (min-width: 0px) {
    display: none;
  }

  @media only screen and (min-width: 992px) {
    display: block;
    top: 34%;
    left: 9%;
    height: 72px;
    width: 225px;
  }

  @media only screen and (min-width: 1200px) {
    display: block;
    top: 32%;
    left: 9%;
    height: 90px;
    width: 300px;
  }

  @media only screen and (min-width: 1350px) {
    display: block;
    top: 29%;
    left: 9%;
    height: 100px;
    width: 310px;
  }

  @media only screen and (min-width: 1500px) {
    display: block;
    top: 28%;
    left: 10%;
    height: 100px;
    width: 310px;
  }

  @media only screen and (min-width: 1650px) {
    display: block;
    top: 27%;
    left: 10%;
    height: 100px;
    width: 350px;
  }

  @media only screen and (min-width: 1750px) {
    display: block;
    top: 26%;
    left: 11%;
    height: 100px;
    width: 350px;
  }

  @media only screen and (min-width: 1900px) {
    display: block;
    top: 25%;
    left: 11%;
    height: 100px;
    width: 350px;
  }
`;

export const DivTextQr = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 94%;
  float: right;
  position: absolute;
  top: 5%;
  left: 30%;

  @media only screen and (min-width: 1350px) {
    left: 31%;
  }

  @media only screen and (min-width: 1620px) {
    left: 32%;
  }

  @media only screen and (min-width: 1500px) {
    left: 31%;
  }
`;

export const SpanText = styled.span`
  font-size: 79%;
  font-weight: bold;

  @media only screen and (min-width: 1350px) {
    font-size: 1em;
  }
`;

export const DivButton = styled.div`
  display: flex;
  position: absolute;
  top: 57%;
  right: 2%;
  column-gap: 3px;

  @media only screen and (min-width: 1350px) {
    top: 57%;
    right: 9%;
  }

  @media only screen and (min-width: 1500px) {
    top: 57%;
    right: 7%;
  }

  @media only screen and (min-width: 1620px) {
    top: 57%;
    right: 5%;
  }
`;

export const ButtonDownLoad = styled.div`
  background-color: black;
  color: white;
  border-radius: 4px;
  height: auto;
  cursor: pointer;
  width: 100%;
`;

export const IconButton = styled.img`
  width: 100%;
  height: 100%;
`;

export {
  Container,
  DivRight,
  Header,
  DivContentRight,
  ImgTitleRight,
  FormInput,
  DivInputUsername,
  FormItem,
  DivError,
  DivInputPassword,
  DivOption,
  InputRadio,
  KeepingLogin,
  SpanKeepingLogin,
  DivLinkForgotPassword,
  LinkForgotPassword,
  ButtonLoginUSB,
};
