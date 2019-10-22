'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('movies',
        [
          {title: 'The Shining', year: '1980', socialRating: '8.4', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'A Nightmare on Elm Street', year: '1984', socialRating: '7.5', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Friday the 13th', year: '1980', socialRating: '6.5', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'The Evil Dead', year: '1981', socialRating: '7.5', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'The Thing', year: '1982', socialRating: '8.1', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Children of the Corn', year: '1984', socialRating: '5.7', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'The Lost Boys', year: '1987', socialRating: '7.3', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Pet Semetary', year: '1989', socialRating: '8.4', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Christine', year: '1983', socialRating: '6.7', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Childs Play', year: '1988', socialRating: '6.6', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Gremlins', year: '1984', socialRating: '7.3', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'The Monster Squad', year: '1987', socialRating: '7.1', movieRating: 'PG-13', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Cutting Class', year: '1989', socialRating: '4.4', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Poltergeist', year: '1982', socialRating: '7.3', movieRating: 'PG', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Evil Dead 2', year: '1987', socialRating: '7.8', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'An American Werewolf in London', year: '1981', socialRating: '8.4', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Creepshow ', year: '1982', socialRating: '6.9', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Cujo', year: '1983', socialRating: '6.1', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Angel Heart', year: '1987', socialRating: '7.3', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Killer Klowns from Outer Space', year: '1988', socialRating: '6.2', movieRating: 'PG-13', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Fright Night', year: '1985', socialRating: '7.1', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'They Live', year: '1988', socialRating: '7.3', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Halloween II', year: '1981', socialRating: '6.5', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Maniac Cop', year: '1988', socialRating: '6.0', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Little Shop of Horrors', year: '1986', socialRating: '5.6', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'The Texas Chainsaw Massace 2', year: '1986', socialRating: '5.6', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'The Return of the Living Dead', year: '1985', socialRating: '7.3', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'The Fly', year: '1986', socialRating: '7.5', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Elvira: Mistress of the Dark', year: '1988', socialRating: '6.5' , movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Pumpkinhead', year: '1988', socialRating: '6.2', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Sleepaway Camp', year: '1983', socialRating: '6.3', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Halloween III: Season of the Witch', year: '1982', socialRating: '4.9', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Friday the 13th: The Final Chapter', year: '1984', socialRating: '6.0', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Creepshow 2', year: '1987', socialRating: '6.1', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Silver Bullet', year: '1985', socialRating: '6.4', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'House', year: '1985', socialRating: '6.2', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'The Blob', year: '1988', socialRating: '6.5', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Manhunter', year: '1986', socialRating: '7.2', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'A Nightmare on Elm Street 3: Dream Warriors', year: '1987', socialRating: '6.6', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Friday the 13th: Part III', year: '1982', socialRating: '5.7', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'A Nightmare on Elm Street 2: Freddys Revenge', year: '1985', socialRating: '5.5', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Troll', year: '1986', socialRating: '4.5', movieRating: 'PG-13', createdAt: new Date(), updatedAt: new Date() },
          {title: 'The Slumber Party Massacre', year: '1982', socialRating: '5.7', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Re-Animator', year: '1985', socialRating: '7.2', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'The Howling', year: '1981', socialRating: '6.6', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Swamp Thing', year: '1982', socialRating: '5.4', movieRating: 'PG', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Halloween: The Return of Michael Meyers', year: '1988', socialRating: '5.9', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Critters', year: '1986', socialRating: '6.1', movieRating: 'PG-13', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Twilight Zone: The Movie', year: '1983', socialRating: '6.5', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'From Beyond', year: '1986', socialRating: '6.7', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Day of the Dead', year: '1985', socialRating: '7.2', movieRating: 'R', createdAt: new Date(), updatedAt: new Date() } 
        ], 
        {}
        );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('movies', null, {});
  }
};
