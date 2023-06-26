CREATE DATABASE IF NOT EXISTS datastructurecourse;


-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: datastructurecourse
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--
USE datastructurecourse

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) NOT NULL,
  `user_surname` varchar(50) NOT NULL,
  `user_mail` varchar(50) NOT NULL,
  `user_password` binary(60) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (4,'Kerim','Şentürk','kerimsenturk2002@outlook.com',_binary '123456\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),(16,'a','a','abc@gmail.com',_binary '$2a$10$vfrRjOcxYRE4fdaW8EI.T.40mNNXd6obBLtEGG/7ntvM6OwMc5RmC'),(17,'a','a','a@a.com',_binary '$2a$10$wcWz8dCk2MH4op/OWJRWUeQZz5fSg.uwavjx/iyTiqnt4fUQhPnNC'),(18,'Kerim ','Şentürk','kerimsenturk@outlook.com',_binary '$2a$10$8PlK0cqw82NQn2n4ycvywuFKDBIRbugu/No7SQojR/qR/.VBr5nMS'),(19,'ku','ku','ku@ogr.kastamonu.edu.tr',_binary '$2a$10$luDEmsEdIkz1ai1BgbQ1AeQp8xNsz6j7zNKmcc998cRGYr6YEmJeC'),(20,'MERYEM','ŞENTÜRK','meryemmsenturk',_binary '$2a$10$DyM96I3799xAEw0FhSNXHut4piA5tRhWVSdPi9d4cjzSXHitinGaS'),(21,'Meryem','Mame','meryemsenturk@gmail.com',_binary '$2a$10$h9uuOUAusrq6QfcG8ScomedMfhFfjdvPzKM853kZA5/68Mq4n8lpK'),(22,'deneme','deneme','deneme@outlook.com',_binary '$2a$10$hgMQ8DM5d7RyAxdBt3cTk.EGBUIxZw/tE6ukqp7Aj1zu0nHX/znDW'),(23,'abc','def','abc@abc.com',_binary '$2a$10$g752D3.3KYPiRGCZG8IB9esH4PKWcYt5ik6AGSDH/A0GjAstR75QW'),(24,'proje','projesoyad','proje1@proje.com',_binary '$2a$10$lQTks9o7uL5RFRyT/FbWUupYZfOVf6TwwBQk4qQMQyQ2Htn07BfWG'),(25,'deneme','denemesoyad','deneme345@outlook.com',_binary '$2a$10$dRuqTxYjXcWPwW0Fki0cIOCKydWXrp5mzB5A89AlE6k7ti/eZ3XzO');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-22 14:36:44
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: datastructurecourse
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `course_name` varchar(50) NOT NULL,
  `course_html_path` text,
  `result_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK8d3m1hllge40gvl2avba0wxhp` (`result_id`),
  CONSTRAINT `FK8d3m1hllge40gvl2avba0wxhp` FOREIGN KEY (`result_id`) REFERENCES `results` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (12,'Stack','/stack',NULL),(13,'Queue','/queue',NULL),(14,'Graph','/graph',NULL),(15,'Tree','/tree',NULL),(16,'Linked List','/linkedlist',NULL);
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-22 14:36:44
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: datastructurecourse
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `results`
--

DROP TABLE IF EXISTS `results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `results` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `course_id` int NOT NULL,
  `result` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKxtl9ahma532if6r68yvgo7ck` (`user_id`),
  KEY `FK8cuthmda1kl4o6d5fftqn9lxf` (`course_id`),
  CONSTRAINT `FK8cuthmda1kl4o6d5fftqn9lxf` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`),
  CONSTRAINT `FKxtl9ahma532if6r68yvgo7ck` FOREIGN KEY (`user_id`) REFERENCES `users` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `results`
--

LOCK TABLES `results` WRITE;
/*!40000 ALTER TABLE `results` DISABLE KEYS */;
INSERT INTO `results` VALUES (4,4,12,3),(7,18,13,0),(9,18,12,2),(11,23,12,1),(12,23,13,5),(13,24,12,3),(14,24,13,5),(15,25,12,3),(16,25,13,4);
/*!40000 ALTER TABLE `results` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-22 14:36:44
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: datastructurecourse
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question_description` text NOT NULL,
  `course_id` int NOT NULL,
  `question_image` tinyblob,
  `question_level` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `FK6y78pbrt5dxp12ljsa8r1ey82` (`course_id`),
  CONSTRAINT `FK6y78pbrt5dxp12ljsa8r1ey82` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'Aşağıdakilerden hangisi stack\'i tanımlar',12,NULL,1),(2,'İçerisinde alttan yukarı sırasıyla 1,2,3,4 elemanlarını bulunduran bir stack\' e sırayla pop()-pop()-peek()-push(6) işlemleri yapılırsa stack\'in son durumu ne olur',12,NULL,1),(6,'Stack veri yapısı neyi temsil eder?',12,NULL,1),(10,'Stack\'e eleman ekleme işlemine ne ad verilir?',12,NULL,1),(11,'Stack\'in başlangıç noktası olarak adlandırılan eleman hangisidir?',12,NULL,1),(12,'Hangi işlem stack veri yapısında elemanları çıkarmaz?',12,NULL,1),(13,'Hangi veri yapısı, stack veri yapısının temelini oluşturur?',12,NULL,1),(14,'Stack veri yapısı hangi algoritmalarda kullanılabilir?',12,NULL,2),(15,'Stack veri yapısı için hangi karmaşıklık analizi doğrudur?',12,NULL,2),(16,'Stack ve kuyruk arasındaki temel fark nedir?',12,NULL,2),(17,'Stack veri yapısı hangi durumda taşma hatası verir?',12,NULL,2),(18,'Bir dilin derleyicisi, hangi veri yapısını kullanarak ifadelerin doğru açılıp kapanıp kapanmadığını kontrol edebilir?',12,NULL,2),(19,'Stack veri yapısı için hangi veri erişim yöntemi en etkili şekilde kullanılır?',12,NULL,3),(20,'Stack veri yapısı, hangi veri yapılarının uygulanmasında kullanılabilir?',12,NULL,3),(21,'Stack veri yapısı için kullanılan bir diğer ad nedir?',12,NULL,3),(22,'Hangi durumda stack veri yapısı tercih edilmez?',12,NULL,3),(23,'Stack veri yapısı için hangi işlem O(1) karmaşıklığa sahip değildir?',12,NULL,3),(24,'Queue veri yapısı hangi prensibe dayanır?',13,NULL,1),(25,'Queue veri yapısına eleman eklemek için kullanılan işlem hangisidir?',13,NULL,1),(26,'Queue veri yapısında başlangıç noktası olarak adlandırılan eleman hangisidir?',13,NULL,1),(27,'Queue veri yapısında elemanları çıkarmak için kullanılan işlem hangisidir?',13,NULL,1),(28,'Hangi veri yapısı, Queue veri yapısının temelini oluşturur?',13,NULL,1),(29,'Queue veri yapısı hangi durumda taşma hatası verir?',13,NULL,1),(30,'Queue veri yapısı hangi algoritmalarda kullanılabilir?',13,NULL,2),(31,'Queue veri yapısı için karmaşıklık analizi doğru olan hangisidir?',13,NULL,2),(32,'Queue veri yapısında, elemanları çıkarmadan sadece ön taraftaki elemanı kontrol etmek için kullanılan işlem hangisidir?',13,NULL,2),(33,'Queue veri yapısı hangi veri yapısıyla benzer bir davranış sergiler?',13,NULL,2),(34,'Queue veri yapısının kullanıldığı bir senaryo hangisidir?',13,NULL,2),(35,'Queue veri yapısı için aşağıdakilerden hangisi geçerli değildir?',13,NULL,3),(36,'Queue veri yapısı, hangi durumda tercih edilmez?',13,NULL,3),(37,'Queue veri yapısının bir diğer adı nedir?',13,NULL,3),(38,'Queue veri yapısında elemanları listelemek için kullanılan işlem hangisidir?',13,NULL,3),(39,'Queue veri yapısı için aşağıdakilerden hangisi doğrudur?',13,NULL,3);
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-22 14:36:44
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: datastructurecourse
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `choices`
--

DROP TABLE IF EXISTS `choices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `choices` (
  `id` int NOT NULL AUTO_INCREMENT,
  `choice_description` text NOT NULL,
  `question_id` int NOT NULL,
  `is_answer` bit(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK4vhssp102sjhbey1y4rhiiyos` (`question_id`),
  CONSTRAINT `FK4vhssp102sjhbey1y4rhiiyos` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `choices`
--

LOCK TABLES `choices` WRITE;
/*!40000 ALTER TABLE `choices` DISABLE KEYS */;
INSERT INTO `choices` VALUES (1,'pop ve push fonksiyonlarını içerir',1,_binary ''),(3,'fifo mantığı ile çalışır',1,_binary '\0'),(5,'peek fonksiyonu sayesinde stack den veri silinir',1,_binary '\0'),(6,'pop fonksiyonu sayesinde stack in en üstteki elemanı gösterilir',1,_binary '\0'),(7,'1-2-3-4-6',2,_binary '\0'),(8,'1-2-6',2,_binary ''),(9,'1-2-3-6',2,_binary '\0'),(10,'1-2-3-4-6',2,_binary '\0'),(13,'İç içe geçmiş döngüleri',6,_binary '\0'),(14,'Son giren ilk çıkar (LIFO) prensibini',6,_binary ''),(15,'İkili ağaçları',6,_binary '\0'),(16,'Veri tabanı sorgularını',6,_binary '\0'),(17,'Pop',10,_binary '\0'),(19,'Push',10,_binary ''),(20,'Peek',10,_binary '\0'),(21,'Append',10,_binary '\0'),(22,'İlk eleman',11,_binary '\0'),(23,' Son eleman',11,_binary ''),(24,'Ortanca eleman',11,_binary '\0'),(25,'Yığıt boyutu',11,_binary '\0'),(27,'Pop',12,_binary '\0'),(28,'Push',12,_binary ''),(29,'Peek',12,_binary '\0'),(30,'Top',12,_binary '\0'),(31,'Dizi',13,_binary ''),(32,'Linked List',13,_binary '\0'),(33,'Ağaç',13,_binary '\0'),(34,'Graph',13,_binary '\0'),(35,'Derinlik Öncelikli Arama (DFS)',14,_binary ''),(36,'Genişlik Öncelikli Arama (BFS)',14,_binary '\0'),(37,'Hem DFS hem de BFS',14,_binary '\0'),(38,'Yalnızca sıralama algoritmalarında',14,_binary '\0'),(41,'En iyi durum: O(1), En kötü durum: O(n)',15,_binary ''),(42,'En iyi durum: O(log n), En kötü durum: O(n)',15,_binary '\0'),(43,'En iyi durum: O(n), En kötü durum: O(n)',15,_binary '\0'),(44,'En iyi durum: O(1), En kötü durum: O(log n)',15,_binary '\0'),(45,'Stack LIFO prensibine dayanırken, kuyruk FIFO prensibine dayanır.',16,_binary ''),(46,'Stack sadece eleman ekleme işlemine izin verirken, kuyruk hem ekleme hem de çıkarma işlemlerini destekler.',16,_binary '\0'),(47,'Stack veri yapısı sadece tam sayıları desteklerken, kuyruk veri yapısı her türlü veriyi destekler.',16,_binary '\0'),(48,'Stack veri yapısı dairesel bir yapıya sahipken, kuyruk veri yapısı düzlemsel bir yapıya sahiptir.',16,_binary '\0'),(49,'Yığın dolu olduğunda yeni bir eleman eklenmeye çalışıldığında',17,_binary ''),(50,'Yığın boş olduğunda bir eleman çıkarılmaya çalışıldığında',17,_binary '\0'),(51,'Yığın boyutu değiştirildiğinde',17,_binary '\0'),(52,'Stack veri yapısı taşma hatası vermez.',17,_binary '\0'),(53,'Grafik',18,_binary '\0'),(54,' Kuyruk',18,_binary '\0'),(55,'Stack',18,_binary ''),(56,'Ağaç',18,_binary '\0'),(57,'Bağlantılı listeler',19,_binary '\0'),(58,'Yığın işlemleri',19,_binary ''),(59,'İndeksleme',19,_binary '\0'),(60,'Sıralama',19,_binary '\0'),(61,'Undo/Redo işlemleri',20,_binary ''),(62,'İteratif döngüler',20,_binary '\0'),(63,'Hepsinde kullanılabilir',20,_binary '\0'),(64,'Recursive fonksiyonlar',20,_binary '\0'),(65,'Queue',21,_binary '\0'),(66,'Heap',21,_binary '\0'),(67,'Last In First Out (LIFO)',21,_binary ''),(68,'First In First Out (FIFO)',21,_binary '\0'),(69,'Verilerin ters sırayla işlenmesi gerektiğinde',22,_binary '\0'),(70,'Çok büyük veri kümelerinin işlendiği durumlarda',22,_binary '\0'),(71,'Verilerin sıralanması gerektiğinde',22,_binary ''),(72,'Birden fazla iş parçacığının aynı anda erişim sağladığı çoklu iş parçacıklı ortamlarda',22,_binary '\0'),(73,'Eleman ekleme (push)',23,_binary '\0'),(74,'Eleman çıkarma (pop)',23,_binary '\0'),(75,'Tüm elemanları listeleme',23,_binary ''),(76,'Elemanı kontrol etme (peek)',23,_binary '\0'),(77,'Son giren, ilk çıkar (FIFO)',24,_binary '\0'),(78,'En küçük öğe önceliklidir',24,_binary '\0'),(80,'İlk giren, ilk çıkar (LIFO)',24,_binary ''),(83,'En büyük öğe önceliklidir',24,_binary '\0'),(84,'Push',25,_binary '\0'),(85,'pop',25,_binary '\0'),(86,'Enqueue',25,_binary ''),(87,'Dequeue',25,_binary '\0'),(91,' İlk eleman',26,_binary ''),(92,'Son eleman',26,_binary '\0'),(93,'Kuyruğun boyutu',26,_binary '\0'),(94,'Ortanca eleman',26,_binary '\0'),(95,'Push',27,_binary '\0'),(96,'Pop',27,_binary '\0'),(97,'Dequeue',27,_binary ''),(98,'Enqueue',27,_binary '\0'),(99,'Dizi',28,_binary ''),(100,'Hash Table',28,_binary '\0'),(101,'Ağaç',28,_binary '\0'),(102,'Graph',28,_binary '\0'),(103,'Kuyruk dolu olduğunda yeni bir eleman eklenmeye çalışıldığında',29,_binary ''),(104,'Kuyruk boş olduğunda bir eleman çıkarılmaya çalışıldığında',29,_binary '\0'),(105,'Kuyruk boyutu değiştirildiğinde',29,_binary '\0'),(106,'Queue veri yapısı taşma hatası vermez.',29,_binary '\0');
/*!40000 ALTER TABLE `choices` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-22 14:36:44
