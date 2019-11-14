export interface TypeTag {
  count?: number;
  has_synonyms?: boolean;
  is_moderator_only?: boolean;
  is_required?: boolean;
  last_activity_date?: Date;
  name?: string;
  synonyms?: string[];
  user_id?: number;
}
