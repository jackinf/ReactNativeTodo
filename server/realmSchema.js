/**
 * Created by stylehopper on 2.07.16.
 */
import Realm from 'realm';

const DogSchema = {
  name: 'Dog',
  schemaVersion: 1,
  properties: {
    // id: { type: 'number', default: 1 },
    name: 'string'
  }
};

const realm = new Realm({ schema: [DogSchema] });

export default realm;