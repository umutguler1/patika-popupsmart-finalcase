class Template {
  title: string;
  text: string;
  color: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
  imageUrl?: string;
  logoUrl?: string;
  inputText?: string;
  inputText2?: string;
  inputText3?: string;
  buttonText1?: string;
  buttonText2?: string;

  constructor(
    title: string,
    text: string,
    text2: string | undefined,
    text3: string | undefined,
    text4: string | undefined,
    text5: string | undefined,
    color: string,
    imageUrl: string | undefined,
    logoUrl: string | undefined,
    inputText: string | undefined,
    inputText2: string | undefined,
    inputText3: string | undefined,
    buttonText1: string | undefined,
    buttonText2: string | undefined
  ) {
    this.text = text;
    this.text2 = text2;
    this.text3 = text3;
    this.text4 = text4;
    this.text5 = text5;
    this.title = title;
    this.color = color;
    this.imageUrl = imageUrl;
    this.logoUrl = logoUrl;
    this.inputText = inputText;
    this.inputText2 = inputText2;
    this.inputText3 = inputText3;
    this.buttonText1 = buttonText1;
    this.buttonText2 = buttonText2;
  }
}

export default Template;
