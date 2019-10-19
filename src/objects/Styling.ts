import {TypeStyling} from '../result-types/TypeStyling';

export class Styling {

  public linkColor: string;

  public tagBackgroundColor: string;

  public tagForegroundColor: string;

  public constructor (styling: TypeStyling) {
    this.linkColor = styling.link_color;
    this.tagBackgroundColor = styling.tag_background_color;
    this.tagForegroundColor = styling.tag_foreground_color;
  }
}
