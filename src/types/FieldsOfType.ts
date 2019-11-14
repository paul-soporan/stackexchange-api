import {fields} from '../objects/fields';

export type FieldsOfType =
  | typeof fields.Answer
  | typeof fields.Badge
  | typeof fields.BadgeCount
  | typeof fields.ClosedDetails
  | typeof fields.Comment
  | typeof fields.Filter
  | typeof fields.Info
  | typeof fields.MigrationInfo
  | typeof fields.Notice
  | typeof fields.OriginalQuestion
  | typeof fields.Post
  | typeof fields.Privilege
  | typeof fields.Question
  | typeof fields.RelatedSite
  | typeof fields.ShallowUser
  | typeof fields.Site
  | typeof fields.Styling
  | typeof fields.Tag
  | typeof fields.Wrapper;
