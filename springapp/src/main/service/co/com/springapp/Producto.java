package co.com.springapp;

public class Producto {

	/**
	 * C�digo del producto.
	 */
	String codigo;

	/**
	 * Descripci�n del producto.
	 */
	String descripcion;
	
	/**
	 * categoria del producto.
	 */
	String categoria;
	
	/**
	 * precio del producto.
	 */
	double precio;
	
	/**
	 * Url de la imagen del producto.
	 */
	String imageUrl;
	
	/**
	 * Url 2 de la imagen del producto.
	 */
	String imageUrl2;
	
	/**
	 * Constructor por defecto.
	 * @param codigo .
	 * @param descripcion .
	 */
	public Producto(String codigo, String descripcion) {
		super();
		this.codigo = codigo;
		this.descripcion = descripcion;
	}
	
	/**
	 * Constructor por defecto.
	 * @param codigo .
	 * @param descripcion .
	 * @param categoria .
	 * @param precio .
	 * @param imageUrl .
	 * @param imageUrl2 .
	 */
	public Producto(String codigo, String descripcion, String categoria, double precio, String imageUrl,
			String imageUrl2) {
		super();
		this.codigo = codigo;
		this.descripcion = descripcion;
		this.categoria = categoria;
		this.precio = precio;
		this.imageUrl = imageUrl;
		this.imageUrl2 = imageUrl2;
	}



	/**
	 * @return the codigo
	 */
	public String getCodigo() {
		return codigo;
	}

	/**
	 * @param codigo
	 *            the codigo to set
	 */
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	/**
	 * @return the descripcion
	 */
	public String getDescripcion() {
		return descripcion;
	}

	/**
	 * @param descripcion
	 *            the descripcion to set
	 */
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	/**
	 * @return the categoria
	 */
	public String getCategoria() {
		return categoria;
	}

	/**
	 * @param categoria the categoria to set
	 */
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	/**
	 * @return the precio
	 */
	public double getPrecio() {
		return precio;
	}

	/**
	 * @param precio the precio to set
	 */
	public void setPrecio(double precio) {
		this.precio = precio;
	}

	/**
	 * @return the imageUrl
	 */
	public String getImageUrl() {
		return imageUrl;
	}

	/**
	 * @param imageUrl the imageUrl to set
	 */
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	/**
	 * @return the imageUrl2
	 */
	public String getImageUrl2() {
		return imageUrl2;
	}

	/**
	 * @param imageUrl2 the imageUrl2 to set
	 */
	public void setImageUrl2(String imageUrl2) {
		this.imageUrl2 = imageUrl2;
	}

}
