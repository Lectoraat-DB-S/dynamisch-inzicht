module.exports = (sequelize, Sequelize) => {
    const themes = sequelize.define("themes", {
        theme_id: { type: INTEGER },
        theme_name: { type: STRING }
    });
    return themes;
}