-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-05-2024 a las 06:34:36
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pasteleria_eco`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `patel_ingredientes`
--

CREATE TABLE `patel_ingredientes` (
  `ID_Pastel` int(11) NOT NULL,
  `ID_ingrediente` int(11) NOT NULL,
  `Cantidad` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `patel_ingredientes`
--
ALTER TABLE `patel_ingredientes`
  ADD KEY `ID_Pastel` (`ID_Pastel`,`ID_ingrediente`),
  ADD KEY `ID_ingrediente` (`ID_ingrediente`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `patel_ingredientes`
--
ALTER TABLE `patel_ingredientes`
  ADD CONSTRAINT `patel_ingredientes_ibfk_1` FOREIGN KEY (`ID_Pastel`) REFERENCES `pastel` (`ID_Pastel`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `patel_ingredientes_ibfk_2` FOREIGN KEY (`ID_ingrediente`) REFERENCES `ingredientes` (`ID_ingrediente`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
