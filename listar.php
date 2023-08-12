<?php

try {

    $conexion = new PDO("mysql=localhost;dbname=warehouse", "root", "");
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $res = $conexion->query('SELECT * FROM racks') or die(print($conexion->errorInfo()));

    $data = [];

    while ($item = $res->fetch(PDO::FETCH_OBJ)) {

        $data[] = [
            'rackName' => $item->rackName,
            'status' => $item->status,
            'rackClass' => $item->rackClass,
            'rackId' => $item->rackId
        ];

    }

    echo json_encode($data);

} catch (PDOException $error) {

    echo $error->getMessage();
    die();

}