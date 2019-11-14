import * as fs from 'fs';
import {keys} from 'ts-transformer-keys';

import {
  Answer,
  Badge,
  BadgeCount,
  ClosedDetails,
  Comment,
  Filter,
  Info,
  MigrationInfo,
  Notice,
  OriginalQuestion,
  Post,
  Privilege,
  Question,
  RelatedSite,
  ShallowUser,
  Site,
  Styling,
  Tag,
  Wrapper,
} from '../../src/index';

import {
  TypeAnswer,
  TypeBadge,
  TypeBadgeCount,
  TypeClosedDetails,
  TypeComment,
  TypeFilter,
  TypeInfo,
  TypeMigrationInfo,
  TypeNotice,
  TypeOriginalQuestion,
  TypePost,
  TypePrivilege,
  TypeQuestion,
  TypeRelatedSite,
  TypeShallowUser,
  TypeSite,
  TypeStyling,
  TypeTag,
  TypeWrapper,
} from '../../src/interfaces/result-types/ResultTypes';


const fields: {[k: string]: {[k: string]: string}} = {};
const fieldList: string[] = [];


(function generateAnswerFields (): void {
  const answerFields = Object.getOwnPropertyNames(new Answer());
  const apiAnswerFields = keys<TypeAnswer>();
  fields.Answer = {};
  answerFields.forEach((field, index) => {
    const apiField = apiAnswerFields[index];
    const composedFieldName = `answer.${apiField}`;
    fields.Answer[field] = composedFieldName;
    fieldList.push(composedFieldName);
  });
})();


(function generateBadgeFields (): void {
  const badgeFields = Object.getOwnPropertyNames(new Badge());
  const apiBadgeFields = keys<TypeBadge>();
  fields.Badge = {};
  badgeFields.forEach((field, index) => {
    const apiField = apiBadgeFields[index];
    const composedFieldName = `badge.${apiField}`;
    fields.Badge[field] = composedFieldName;
    fieldList.push(composedFieldName);
  });
})();


(function generateBadgeCountFields (): void {
  const badgeCountFields = Object.getOwnPropertyNames(new BadgeCount());
  const apiBadgeCountFields = keys<TypeBadgeCount>();
  fields.BadgeCount = {};
  badgeCountFields.forEach((field, index) => {
    const apiField = apiBadgeCountFields[index];
    const composedFieldName = `badge_count.${apiField}`;
    fields.BadgeCount[field] = composedFieldName;
    fieldList.push(composedFieldName);
  });
})();


(function generateClosedDetailsFields (): void {
  const closedDetailsFields = Object.getOwnPropertyNames(new ClosedDetails());
  const apiClosedDetailsFields = keys<TypeClosedDetails>();
  fields.ClosedDetails = {};
  closedDetailsFields.forEach((field, index) => {
    const apiField = apiClosedDetailsFields[index];
    const composedFieldName = `closed_details.${apiField}`;
    fields.ClosedDetails[field] = composedFieldName;
    fieldList.push(composedFieldName);
  });
})();


(function generateCommentFields (): void {
  const commentFields = Object.getOwnPropertyNames(new Comment());
  const apiCommentFields = keys<TypeComment>();
  fields.Comment = {};
  commentFields.forEach((field, index) => {
    const apiField = apiCommentFields[index];
    const composedFieldName = `comment.${apiField}`;
    fields.Comment[field] = composedFieldName;
    fieldList.push(composedFieldName);
  });
})();


(function generateFilterFields (): void {
  const filterFields = Object.getOwnPropertyNames(new Filter());
  const apiFilterFields = keys<TypeFilter>();
  fields.Filter = {};
  filterFields.forEach((field, index) => {
    const apiField = apiFilterFields[index];
    const composedFieldName = `filter.${apiField}`;
    fields.Filter[field] = composedFieldName;
    fieldList.push(composedFieldName);
  });
})();


(function generateInfoFields (): void {
  const infoFields = Object.getOwnPropertyNames(new Info());
  const apiInfoFields = keys<TypeInfo>();
  fields.Info = {};
  infoFields.forEach((field, index) => {
    const apiField = apiInfoFields[index];
    const composedFieldName = `info.${apiField}`;
    fields.Info[field] = composedFieldName;
    fieldList.push(composedFieldName);
  });
})();


(function generateMigrationInfoFields (): void {
  const migrationInfoFields = Object.getOwnPropertyNames(new MigrationInfo());
  const apiMigrationInfoFields = keys<TypeMigrationInfo>();
  fields.MigrationInfo = {};
  migrationInfoFields.forEach((field, index) => {
    const apiField = apiMigrationInfoFields[index];
    const composedFieldName = `migration_info.${apiField}`;
    fields.MigrationInfo[field] = composedFieldName;
    fieldList.push(composedFieldName);
  });
})();


(function generateNoticeFields (): void {
  const noticeFields = Object.getOwnPropertyNames(new Notice());
  const apiNoticeFields = keys<TypeNotice>();
  fields.Notice = {};
  noticeFields.forEach((field, index) => {
    const apiField = apiNoticeFields[index];
    const composedFieldName = `notice.${apiField}`;
    fields.Notice[field] = composedFieldName;
    fieldList.push(composedFieldName);
  });
})();


(function generateOriginalQuestionFields (): void {
  const originalQuestionFields = Object.getOwnPropertyNames(new OriginalQuestion());
  const apiOriginalQuestionFields = keys<TypeOriginalQuestion>();
  fields.OriginalQuestion = {};
  originalQuestionFields.forEach((field, index) => {
    const apiField = apiOriginalQuestionFields[index];
    const composedFieldName = `original_question.${apiField}`;
    fields.OriginalQuestion[field] = composedFieldName;
    fieldList.push(composedFieldName);
  });
})();


(function generatePostFields (): void {
  const postFields = Object.getOwnPropertyNames(new Post());
  const apiPostFields = keys<TypePost>();
  fields.Post = {};
  postFields.forEach((field, index) => {
    const apiField = apiPostFields[index];
    const composedFieldName = `post.${apiField}`;
    fields.Post[field] = composedFieldName;
    fieldList.push(composedFieldName);
  });
})();


(function generatePrivilegeFields (): void {
  const privilegeFields = Object.getOwnPropertyNames(new Privilege());
  const apiPrivilegeFields = keys<TypePrivilege>();
  fields.Privilege = {};
  privilegeFields.forEach((field, index) => {
    const apiField = apiPrivilegeFields[index];
    const composedFieldName = `privilege.${apiField}`;
    fields.Privilege[field] = composedFieldName;
    fieldList.push(composedFieldName);
  });
})();


(function generateQuestionFields (): void {
  const questionFields = Object.getOwnPropertyNames(new Question());
  const apiQuestionFields = keys<TypeQuestion>();
  fields.Question = {};
  questionFields.forEach((field, index) => {
    const apiField = apiQuestionFields[index];
    const composedFieldName = `question.${apiField}`;
    fields.Question[field] = composedFieldName;
    fieldList.push(composedFieldName);
  });
})();


(function generateRelatedSiteFields (): void {
  const relatedSiteFields = Object.getOwnPropertyNames(new RelatedSite());
  const apiRelatedSiteFields = keys<TypeRelatedSite>();
  fields.RelatedSite = {};
  relatedSiteFields.forEach((field, index) => {
    const apiField = apiRelatedSiteFields[index];
    const composedFieldName = `related_site.${apiField}`;
    fields.RelatedSite[field] = composedFieldName;
    fieldList.push(composedFieldName);
  });
})();


(function generateShallowUserFields (): void {
  const shallowUserFields = Object.getOwnPropertyNames(new ShallowUser());
  const apiShallowUserFields = keys<TypeShallowUser>();
  fields.ShallowUser = {};
  shallowUserFields.forEach((field, index) => {
    const apiField = apiShallowUserFields[index];
    const composedFieldName = `shallow_user.${apiField}`;
    fields.ShallowUser[field] = composedFieldName;
    fieldList.push(composedFieldName);
  });
})();


(function generateSiteFields (): void {
  const siteFields = Object.getOwnPropertyNames(new Site());
  const apiSiteFields = keys<TypeSite>();
  fields.Site = {};
  siteFields.forEach((field, index) => {
    const apiField = apiSiteFields[index];
    const composedFieldName = `site.${apiField}`;
    fields.Site[field] = composedFieldName;
    fieldList.push(composedFieldName);
  });
})();


(function generateStylingFields (): void {
  const stylingFields = Object.getOwnPropertyNames(new Styling());
  const apiStylingFields = keys<TypeStyling>();
  fields.Styling = {};
  stylingFields.forEach((field, index) => {
    const apiField = apiStylingFields[index];
    const composedFieldName = `styling.${apiField}`;
    fields.Styling[field] = composedFieldName;
    fieldList.push(composedFieldName);
  });
})();


(function generateTagFields (): void {
  const tagFields = Object.getOwnPropertyNames(new Tag());
  const apiTagFields = keys<TypeTag>();
  fields.Tag = {};
  tagFields.forEach((field, index) => {
    const apiField = apiTagFields[index];
    const composedFieldName = `tag.${apiField}`;
    fields.Tag[field] = composedFieldName;
    fieldList.push(composedFieldName);
  });
})();


(function generateWrapperFields (): void {
  const wrapperFields = Object.getOwnPropertyNames(new Wrapper());
  const apiWrapperFields = keys<TypeWrapper>();
  fields.Wrapper = {};
  wrapperFields.forEach((field, index) => {
    const apiField = apiWrapperFields[index];
    const composedFieldName = `.${apiField}`;
    fields.Wrapper[field] = composedFieldName;
    fieldList.push(composedFieldName);
  });
})();


const fieldsTsContent
  = `export const fields = ${JSON.stringify(fields, null, 2)} as const;\n`;

fs.writeFile('src/objects/fields.ts', fieldsTsContent, 'utf8', (err) => {
  if (err) {
    throw err;
  }
  console.log('Successfully wrote to and saved src/objects/fields.ts');
});


const fieldTsContent
  = `const fieldList = ${JSON.stringify(fieldList, null, 2)} as const;\n\nexport type Field = typeof fieldList[number];\n`;

fs.writeFile('src/types/Field.ts', fieldTsContent, 'utf8', (err) => {
  if (err) {
    throw err;
  }
  console.log('Successfully wrote to and saved src/types/Field.ts');
});
