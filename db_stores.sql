-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: database
-- Generation Time: Apr 18, 2022 at 09:31 AM
-- Server version: 5.7.29
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lamp`
--

-- --------------------------------------------------------

--
-- Table structure for table `db_stores`
--

CREATE TABLE `db_stores` (
  `id` varchar(255) NOT NULL,
  `managerID` int(11) NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `status` varchar(30) DEFAULT NULL,
  `storePhoto` varchar(255) DEFAULT NULL,
  `created_by` varchar(30) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `db_stores`
--

INSERT INTO `db_stores` (`id`, `managerID`, `location`, `status`, `storePhoto`, `created_by`, `created_at`, `updated_at`, `updated_by`) VALUES
('5', 1, 'Kentucky', 'Active', '520fe84b-2429-48cf-9677-4014bbc0add5.jpg', 'Karen', '2022-04-11 12:27:57', '2022-04-17 06:00:12', 'Matteo');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `db_stores`
--
ALTER TABLE `db_stores`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
