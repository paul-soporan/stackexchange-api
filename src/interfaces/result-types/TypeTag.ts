export interface TypeTag {
  readonly count?: number;
  readonly has_synonyms?: boolean;
  readonly is_moderator_only?: boolean;
  readonly is_required?: boolean;
  readonly last_activity_date?: Date;
  readonly name?: string;
  readonly synonyms?: string[];
  readonly user_id?: number;
}
