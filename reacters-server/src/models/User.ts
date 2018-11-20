import { Table, Column, Model, HasMany } from 'sequelize-typescript';

@Table({
  tableName: 'users'
})
class User extends Model<User> {
  @Column
  username!: string;

  @Column
  password_hash!: string;
}

export default User;
