# NT2-CELPHONE
app Reservas de reparacion de Celular

Cellphone Reparaciones

Descripción

Los usuarios (as) podrán:
Se podrá autenticar
Administrar  datos de la cuenta:
Nombre
Número celular
Desactivar cuenta
Solicitar una reserva para reparar su celular.

Seguimiento de la reparación por estado:
Pendiente: Estado inicial al registrar una reparación, se genera de forma automática al registrar la misma. 
Realizada: Se realiza la reparación y el cliente retira su equipo reparado. 
Cancelada: Se cancela la reparación por parte del cliente y/o de la empresa. 
Administrar la reserva: 

Ver  histórico de reservas.
Cancelar su reserva (solo si está pendiente) 

Requerimientos 
Flujo de Autenticación: Puede ser con proveedores de Identidad (google, facebook, custom)
Al menos tres vistas
Alguna integración con una API de terceros.
Funcionalidades
ABM de reparaciones
Alta: Registro de la reparación. 
Baja: Se cancela la reparación. (opcional)
Modificación: Se actualizan atributos de la solicitud registrada. (opcional)
ABM de Usuarios:
Alta: (Conectar con API Google), Baja - Modificación.
