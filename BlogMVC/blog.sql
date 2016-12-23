-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema blog
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `blog` ;

-- -----------------------------------------------------
-- Schema blog
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `blog` DEFAULT CHARACTER SET utf8 ;
USE `blog` ;

-- -----------------------------------------------------
-- Table `Users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Users` ;

CREATE TABLE IF NOT EXISTS `Users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL,
  `password` VARCHAR(120) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Post`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Post` ;

CREATE TABLE IF NOT EXISTS `Post` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `post_name` VARCHAR(120) NULL,
  `body` VARCHAR(1000) NULL,
  `post_date` DATETIME NULL,
  `User_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Post_Users_idx` (`User_id` ASC),
  CONSTRAINT `fk_Post_Users`
    FOREIGN KEY (`User_id`)
    REFERENCES `Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
GRANT USAGE ON *.* TO blogStart;
 DROP USER blogStart;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER 'blogStart' IDENTIFIED BY 'annie';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'blogStart';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `Users`
-- -----------------------------------------------------
START TRANSACTION;
USE `blog`;
INSERT INTO `Users` (`id`, `username`, `password`) VALUES (1, 'fisha', 'password1');
INSERT INTO `Users` (`id`, `username`, `password`) VALUES (2, 'benni', 'password2');

COMMIT;


-- -----------------------------------------------------
-- Data for table `Post`
-- -----------------------------------------------------
START TRANSACTION;
USE `blog`;
INSERT INTO `Post` (`id`, `post_name`, `body`, `post_date`, `User_id`) VALUES (1, 'hello', 'I will start by saying hello.', '2016-12-16', 1);
INSERT INTO `Post` (`id`, `post_name`, `body`, `post_date`, `User_id`) VALUES (2, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue, turpis vitae tempus euismod, elit lorem mattis nulla, ut ullamcorper lectus elit et turpis. Donec dictum augue felis, sit amet placerat nisl convallis vel. Etiam gravida pretium dolor, vel finibus lacus finibus non. Morbi pellentesque erat at lorem congue, id facilisis diam aliquam. Duis eget bibendum massa. Integer eleifend nisl malesuada justo fringilla, eget iaculis augue elementum. Nullam finibus, turpis ac ornare sollicitudin, magna felis interdum dolor, sagittis euismod diam nulla id augue. Mauris dapibus libero ut ipsum laoreet ullamcorper. Nulla facilisi. Praesent sodales velit at elit condimentum ultricies. Sed non enim a massa bibendum suscipit vitae in enim. Curabitur molestie ligula a venenatis lacinia. In sit amet consectetur enim, et malesuada orci.', '2016-12-16', 1);
INSERT INTO `Post` (`id`, `post_name`, `body`, `post_date`, `User_id`) VALUES (3, 'test', 'testing 1234 testing testing', '2016-12-16', 2);
INSERT INTO `Post` (`id`, `post_name`, `body`, `post_date`, `User_id`) VALUES (4, 'test2', 'bacon bits are delish and so is pizza', '2016-12-16', 2);

COMMIT;

