<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
// Requiere Composer y PHPMailer
require 'vendor/autoload.php';
define('MAIL_INFO_TARGET', 'cuentaiacurso@gmail.com'); // Cambiar al correo de destino

header(header: 'Content-Type: application/json');
// Verificar método
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
echo json_encode(['result' => false, 'message' => 'Método no permitido']);
exit;
}
// Recoger y validar
$nombre = trim($_POST['nombre'] ?? '');
$correo = trim($_POST['correo'] ?? '');
$asunto = trim($_POST['asunto'] ?? '');
$mensaje = trim($_POST['mensaje'] ?? '');
// $archivo = $_FILES['documentacion'] ?? null;
if (
$nombre === '' || $correo === '' || $asunto === '' || $mensaje === '' || 
!filter_var($correo, FILTER_VALIDATE_EMAIL) //||
// !$archivo || $archivo['error'] !== UPLOAD_ERR_OK ||
// mime_content_type($archivo['tmp_name']) !== 'application/pdf' ||
// strtolower(pathinfo($archivo['name'], PATHINFO_EXTENSION)) !== 'pdf'
) {
echo json_encode([
'result' => false,

'message' => 'La información recibida es incorrecta, por favor, verifique los
datos introducidos en el formulario.'
]);
exit;
}
// Enviar con PHPMailer
$mail = new PHPMailer(true);
try {
// Configuración básica (usa SMTP si quieres mejor fiabilidad)
$mail->setFrom($correo, $nombre);
$mail->addAddress(MAIL_INFO_TARGET);
$mail->Subject = $asunto;
$mail->Body =
"Nombre: $nombre\n" .
"Correo: $correo\n\n" .
"Mensaje:\n$mensaje";
// $mail->addAttachment($archivo['tmp_name'], $archivo['name']);
$mail->send();
echo json_encode(['result' => true, 'message' => 'Mensaje recibido con éxito']);
} catch (Exception $e) {
echo json_encode(['result' => false, 'message' => 'No se pudo enviar el
correo.']);
}