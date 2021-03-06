/**
 * @author mrdoob / http://mrdoob.com/
 */

var Menubar = function ( editor ) {

	var container = new UI.Panel();
	container.setId( 'menubar' );

	container.add( new Menubar.File( editor ) );
	container.add( new Menubar.Edit( editor ) );
	container.add( new Menubar.Add( editor ) );
	container.add( new Menubar.Play( editor ) );
    //container.add( new Menubar.View( editor ) );
    container.add( new Menubar.Light(editor) );
	container.add( new Menubar.Examples( editor ) );
	container.add( new Menubar.Postprocessing( editor ) );
	container.add( new Menubar.Stage( editor ) );
	container.add( new Menubar.Physics( editor ) );
	container.add( new Menubar.Help( editor ) );
	container.add( new Menubar.Status( editor ) );

	var ahref = new UI.A();
	ahref.dom.innerText = 'ModelLibrary  ';
	ahref.dom.href = "models/index.php" ;
	var title = new UI.Panel();
	title.setClass( 'title' );
	title.add( ahref );
	var ahref = new UI.A();
	ahref.dom.innerText = 'Physics';
	ahref.dom.innerText = '  PhysicsDemo';
	ahref.dom.href = "ammojs-learn/index.html" ;
	title.add( ahref );
	

	var containe = new UI.Panel();
	containe.setClass( 'menu' );
	containe.add( title );

	container.add(containe);


	return container;

};
