class Template {
  title: string;
  text: string;
  color: string;
  imageUrl?: string;
  logoUrl?: string;
  inputText?: string;
  buttonText1?: string;
  buttonText2?: string;

  constructor(
    title: string,
    text: string,
    color: string,
    imageUrl: string,
    logoUrl: string,
    inputText: string | undefined,
    buttonText1: string | undefined,
    buttonText2: string | undefined
  ) {
    this.text = text;
    this.title = title;
    this.color = color;
    this.imageUrl = imageUrl;
    this.logoUrl = logoUrl;
    this.inputText = inputText;
    this.buttonText1 = buttonText1;
    this.buttonText2 = buttonText2;
  }
}

export default Template;
