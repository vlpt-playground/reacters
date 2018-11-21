require('dotenv').config();
import database from './database';

database.sync();
