<!DOCTYPE html>
<html>
<body>
<h1>
	sum(2)(3)(55)(15)();
</h1>
<script type="text/javascript">
	
	const sumOf = function(a){

		return function(b){
			if (b) {
				//console.log(b)
				return sumOf(a+b);
			} else {
				console.log(a);
				return a;
			}
			
		}

	}

	sumOf(2)(3)(55)(15)();

</script>
</body>
</html>