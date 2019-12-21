-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 17, 2019 at 02:31 PM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_sem4`
--

-- --------------------------------------------------------

--
-- Table structure for table `attribute`
--

DROP TABLE IF EXISTS `attribute`;
CREATE TABLE IF NOT EXISTS `attribute` (
  `attribute_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` varchar(10) NOT NULL,
  `attribute_name` varchar(20) NOT NULL,
  `value` varchar(10) NOT NULL,
  PRIMARY KEY (`attribute_id`),
  KEY `product_id` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE IF NOT EXISTS `cart` (
  `cart_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(10) NOT NULL,
  `order_id` varchar(10) NOT NULL,
  PRIMARY KEY (`cart_id`),
  KEY `user_id` (`user_id`,`order_id`),
  KEY `order_id` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `category_id` varchar(10) NOT NULL,
  `category_name` varchar(20) NOT NULL,
  PRIMARY KEY (`category_id`),
  KEY `category_id` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`) VALUES
('11', 'Electronic'),
('12', 'Table fan'),
('13', 'Mobile'),
('14', 'Laptop'),
('15', 'Tab'),
('16', 'Speaker'),
('17', 'Headphone'),
('18', 'Toy'),
('19', 'Cotton'),
('20', 'Teddy'),
('21', 'Doll'),
('22', 'Plastic'),
('23', 'Car');

-- --------------------------------------------------------

--
-- Table structure for table `category_subcategory`
--

DROP TABLE IF EXISTS `category_subcategory`;
CREATE TABLE IF NOT EXISTS `category_subcategory` (
  `category_id` varchar(10) NOT NULL,
  `subcatergory_id` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category_subcategory`
--

INSERT INTO `category_subcategory` (`category_id`, `subcatergory_id`) VALUES
('11', '12'),
('11', '13'),
('11', '14'),
('11', '15'),
('11', '16'),
('11', '17'),
('18', '19'),
('18', '22'),
('19', '20'),
('19', '21'),
('22', '23');

-- --------------------------------------------------------

--
-- Table structure for table `delivery`
--

DROP TABLE IF EXISTS `delivery`;
CREATE TABLE IF NOT EXISTS `delivery` (
  `delivery_id` int(20) NOT NULL AUTO_INCREMENT,
  `order_id` varchar(10) NOT NULL,
  `remaining_days` int(2) NOT NULL,
  `address` varchar(20) NOT NULL,
  `status` varchar(10) NOT NULL,
  PRIMARY KEY (`delivery_id`),
  KEY `order_id` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
CREATE TABLE IF NOT EXISTS `order` (
  `order_id` varchar(10) NOT NULL,
  `user_id` varchar(10) NOT NULL,
  `payment_method` varchar(10) NOT NULL,
  `delivery_method` varchar(10) NOT NULL,
  `order_date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `address` varchar(20) NOT NULL,
  `status` varchar(10) NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `user_id` (`user_id`),
  KEY `order_id` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
CREATE TABLE IF NOT EXISTS `order_item` (
  `SKU` varchar(20) NOT NULL,
  `order_id` varchar(10) NOT NULL,
  `qty` int(3) NOT NULL,
  PRIMARY KEY (`SKU`),
  KEY `order_id` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `product_id` varchar(10) NOT NULL,
  `title` varchar(30) NOT NULL,
  `weight` int(10) NOT NULL,
  `category_id` varchar(10) NOT NULL,
  PRIMARY KEY (`product_id`),
  KEY `category_id` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `title`, `weight`, `category_id`) VALUES
('1', 'Apple 6S', 450, '13'),
('2', 'JBL speaker', 254, '16'),
('3', 'Cotton Teddy', 220, '20'),
('4', 'Samsung s6', 125, '13'),
('5', 'Nokia A3', 160, '13'),
('6', 'Toy car', 45, '23');

-- --------------------------------------------------------

--
-- Table structure for table `product_varient`
--

DROP TABLE IF EXISTS `product_varient`;
CREATE TABLE IF NOT EXISTS `product_varient` (
  `product-id` varchar(10) NOT NULL,
  `SKU` varchar(20) NOT NULL,
  `varient` varchar(100) NOT NULL,
  `price` varchar(20) NOT NULL,
  `default` varchar(10) NOT NULL,
  PRIMARY KEY (`product-id`,`SKU`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` varchar(10) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `contact_number` varchar(10) NOT NULL,
  `address` varchar(100) NOT NULL,
  PRIMARY KEY (`user_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `varient`
--

DROP TABLE IF EXISTS `varient`;
CREATE TABLE IF NOT EXISTS `varient` (
  `varient_id` varchar(10) NOT NULL,
  `varient_type_id` varchar(10) NOT NULL,
  `varient_description` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `varient_type`
--

DROP TABLE IF EXISTS `varient_type`;
CREATE TABLE IF NOT EXISTS `varient_type` (
  `varient_type_id` varchar(10) NOT NULL,
  `varient_type` varchar(50) NOT NULL,
  PRIMARY KEY (`varient_type_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `varient_type`
--

INSERT INTO `varient_type` (`varient_type_id`, `varient_type`) VALUES
('V01', 'Color'),
('V02', 'Internal memory'),
('V03', 'Local'),
('V04', 'Imported'),
('V05', 'dB value');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attribute`
--
ALTER TABLE `attribute`
  ADD CONSTRAINT `attribute_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `delivery`
--
ALTER TABLE `delivery`
  ADD CONSTRAINT `delivery_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `order_item`
--
ALTER TABLE `order_item`
  ADD CONSTRAINT `order_item_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `product_varient`
--
ALTER TABLE `product_varient`
  ADD CONSTRAINT `product_varient_ibfk_1` FOREIGN KEY (`product-id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
