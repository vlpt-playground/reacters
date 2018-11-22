import {
  Table,
  Column,
  Model,
  HasMany,
  CreatedAt,
  UpdatedAt,
  DataType,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';
import pick from 'lodash/pick';
import User from './User';

function shorten(text: string) {
  return text.length > 150 ? `${text.slice(0, 150)}...` : text;
}
@Table({
  tableName: 'posts',
  indexes: [
    {
      fields: ['user_id']
    }
  ]
})
class Post extends Model<Post> {
  @Column
  title!: string;

  @Column(DataType.TEXT)
  body!: string;

  @ForeignKey(() => User)
  @Column
  user_id!: number;

  @BelongsTo(() => User)
  user!: User;

  @CreatedAt
  created_at!: Date;

  @UpdatedAt
  updated_at!: Date;

  async resolveUser() {
    if (this.user) return;
    const user = await User.findById(this.user_id);
    if (user) {
      this.user = user;
    }
  }

  serialize(ellipsis?: boolean) {
    return {
      ...pick(this, ['id', 'title', 'body', 'created_at', 'updated_at']),
      body: ellipsis ? shorten(this.body) : this.body,
      user: this.user
        ? {
            id: this.user.id,
            username: this.user.username
          }
        : null
    };
  }
}

export default Post;
