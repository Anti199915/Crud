<?php
include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$_POST = json_decode(file_get_contents("php://input"), true);
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['ID_ingrediente'])) ? $_POST['ID_ingrediente'] : '';
$descripcion = (isset($_POST['Descripciion_ingrediente'])) ? $_POST['Descripciion_ingrediente'] : '';
$fechaI = (isset($_POST['Fecha_ingreso'])) ? $_POST['Fecha_ingreso'] : '';
$fechaV = (isset($_POST['Fecha_vencimiento'])) ? $_POST['Fecha_vencimiento'] : '';

$idpastel = (isset($_POST['ID_Pastel'])) ? $_POST['ID_Pastel'] : '';
$preparado = (isset($_POST['Preparado_por'])) ? $_POST['Preparado_por'] : '';
$FechaI = (isset($_POST['Fecha_creacion'])) ? $_POST['Fecha_creacion'] : '';
$fechaV = (isset($_POST['Fecha_vencimiento'])) ? $_POST['Fecha_vencimiento'] : '';
$des = (isset($_POST['Descripcion'])) ? $_POST['Descripcion'] : '';
$nombre = (isset($_POST['Nombre_Pastel'])) ? $_POST['Nombre_Pastel'] : '';

switch($opcion){
    case 1:
        $consulta = "INSERT INTO ingredientes (Descripciion_ingrediente, Fecha_ingreso, Fecha_vencimiento) VALUES('$descripcion', '$fechaI', '$fechaV') ";	
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                
        break;
    case 2:
        $consulta = "UPDATE ingredientes SET Descripciion_ingrediente='$descripcion', Fecha_ingreso='$fechaI', Fecha_vencimiento='$fechaV' WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;        
    case 3:
        $consulta = "DELETE FROM ingredientes WHERE ID_ingrediente='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                           
        break;         
    case 4:
        $consulta = "SELECT ID_ingrediente, Descripciion_ingrediente, Fecha_ingreso, Fecha_vencimiento FROM ingredientes";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;

        case 5:
            $consulta = "INSERT INTO pastel (Nombre_Pastel, Preparado_por, Fecha_creacion, Fecha_vencimiento, Descripcion  ) VALUES('$ID_Pastel', '$nombre', '$preparado', '$FechaI','fechaV', '$Descripcion') ";	
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();                
            break;
        case 6:
            $consulta = "UPDATE pastel SET Nombre_Pastel='$nombre', FechaI='$Fecha_creacion', Fecha_vencimiento='$fechaV', Descripcion=$des ,Nombre_Pastel= $nombre WHERE ID_Pastel='$idpastel' ";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();                        
            $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
            break;        
        case 7:
            $consulta = "DELETE FROM pastel WHERE idPastel='$ID_Pastel' ";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();                           
            break;         
        case 8:
            $consulta = "SELECT ID_Pastel, Preparado_por, Fecha_ingreso, Fecha_creacion, Fecha_vencimiento, Descripcion, Nombre_Pastel   FROM pastel";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
            break;
}
print json_encode($data, JSON_UNESCAPED_UNICODE);
$conexion = NULL;