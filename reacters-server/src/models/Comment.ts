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
import Post from './Post';

@Table({
  tableName: 'comments',
  indexes: [
    {
      fields: ['user_id']
    },
    {
      fields: ['post_id']
    }
  ]
})
class Comment extends Model<Comment> {
  @Column
  text!: string;

  @ForeignKey(() => User)
  @Column
  user_id!: number;

  @BelongsTo(() => User)
  user!: User;

  @ForeignKey(() => Post)
  @Column
  post_id!: number;

  @BelongsTo(() => Post)
  post!: Post;

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

  serialize() {
    return {
      ...pick(this, ['id', 'created_at', 'text', 'post_id']),
      user: {
        id: this.user.id,
        username: this.user.username
      }
    };
  }
}

export default Comment;
