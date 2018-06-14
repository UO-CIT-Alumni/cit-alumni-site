-- MySQL Script generated by MySQL Workbench
-- Thu 14 Jun 2018 10:40:16 AM PDT
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema citalum
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema citalum
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `citalum` DEFAULT CHARACTER SET utf8 ;
USE `citalum` ;

-- -----------------------------------------------------
-- Table `citalum`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `citalum`.`user` ;

CREATE TABLE IF NOT EXISTS `citalum`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `uo_email` VARCHAR(32) NULL,
  `other_email` VARCHAR(64) NULL,
  `password` VARCHAR(32) NULL,
  `major` VARCHAR(45) NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `citalum`.`newsletter`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `citalum`.`newsletter` ;

CREATE TABLE IF NOT EXISTS `citalum`.`newsletter` (
  `post_id` INT NOT NULL AUTO_INCREMENT,
  `contents` LONGTEXT NULL,
  `author` VARCHAR(45) NULL,
  `publish_date` DATETIME NULL,
  `title` VARCHAR(45) NULL,
  `subtitle` VARCHAR(45) NULL,
  PRIMARY KEY (`post_id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
