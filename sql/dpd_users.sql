-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Machine: 172.21.1.87
-- Gegenereerd op: 13 aug 2015 om 16:39
-- Serverversie: 5.5.43-0ubuntu0.14.04.1
-- PHP-versie: 5.5.9-1ubuntu4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databank: `sanderdeblpai4cu`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `dpd_users`
--

CREATE TABLE IF NOT EXISTS `dpd_users` (
`id` int(11) NOT NULL,
  `user` varchar(80) NOT NULL,
  `pass` varchar(80) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `dpd_users`
--

INSERT INTO `dpd_users` (`id`, `user`, `pass`) VALUES
(1, '4f0777d0b76c3116a253fa1ed03ac1fc1ab09368600d10c97d19705aa558b6a3', 'ce3382087bd8dc5ad7772355573d8e67ddd80d0019683cb7786ec74cb3fe82df');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `dpd_users`
--
ALTER TABLE `dpd_users`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `dpd_users`
--
ALTER TABLE `dpd_users`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
