'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, FLOAT, DATE, STRING } = Sequelize;
    await queryInterface.createTable('accounts', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: INTEGER,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id',
        },
        allowNull: false,
      },
      tag_id: {
        type: INTEGER,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id',
        },
      },
      type: STRING(10),
      value: FLOAT(2),
      desc: STRING(60),
      create_at: DATE,
      update_at: DATE,
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('tags');
  },
};
