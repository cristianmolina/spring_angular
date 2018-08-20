package co.com.springapp;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Web service rest, para consulta de productos de la compañia.
 * 
 * @author Cristian Molina.
 */
@RestController
@RequestMapping("data")
@CrossOrigin(origins = "*")
public class ConsultaProducto implements Serializable {

	/**
	 * Id Serial por defecto.
	 */
	private static final long serialVersionUID = 6314849310690801456L;

	/**
	 * Permite consultar documentos desde el cliente.
	 * 
	 * @return .
	 */

	@RequestMapping(value = "/productos")
	public List<Producto> consultarProductos() {
		List<Producto> productos = new ArrayList<Producto>();
		productos.add(new Producto("0001", "Estilo nuevo en tendencia.", "Camisa Formal", 150000,
				"../assets/images/camisas/0001-A.jpg", "../assets/images/camisas/0001-B.jpg"));

		return productos;
	}

}
