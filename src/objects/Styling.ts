import {TypeStyling} from '../result-types/TypeStyling';

/**
 * The equivalent of [Type styling](https://api.stackexchange.com/docs/types/styling).<br>
 * This object represents some Stylings of a [[Site]] in the [Stack Exchange network](https://stackexchange.com/sites).<br>
 * These Stylings are meant to allow developers to subtly vary the presentation of resources in their applications so as to indicate to users the original source site.<br>
 * Applications should be able to gracefully handle these styles changes, though they can safely assume that these style changes are infrequent.<br>
 * Note that colors can be returned either as six or three digit hex triplets.
 */
export class Styling {

  public linkColor: string;

  public tagBackgroundColor: string;

  public tagForegroundColor: string;

  public constructor (styling: TypeStyling) {
    this.linkColor = styling.link_color ?? null;
    this.tagBackgroundColor = styling.tag_background_color ?? null;
    this.tagForegroundColor = styling.tag_foreground_color ?? null;
  }
}
