import { Table, Column, Model, HasMany, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { generateToken } from '../lib/common';
import nanoid from 'nanoid';

@Table({
  tableName: 'users'
})
class User extends Model<User> {
  @Column
  username!: string;

  @Column
  password_hash!: string;

  @CreatedAt
  created_at!: Date;

  @UpdatedAt
  updated_at!: Date;

  async generateAccessToken() {
    const token = await generateToken(
      {
        user: {
          id: this.id,
          username: this.username
        }
      },
      {
        expiresIn: '7d'
      }
    );
    return token;
  }

  async generateRefreshToken() {
    const token = await generateToken(
      {
        user_id: this.id
      },
      {
        subject: 'refresh_token',
        jwtid: nanoid()
      }
    );
    return token;
  }
}

export type UserTokenData = {
  id: number;
  username: string;
};

export default User;
