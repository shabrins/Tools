#define UNDERCONTROL 0
#define MULTIPLY(x,y) x*y
#define GOOD(method,BOY) method("GOOD %s",BOY)
void defineExperiment(){
#ifdef UNDERCONTROL
	printf("under control\n");
#else
	printf("not under control\n");
#endif
	printf("%s, %d, %s\n",__FILE__,__LINE__,__DATE__ );
	printf("%d\n",MULTIPLY(12, 5));
	GOOD(printf,"OLD");
}


int main(int argc, char const *argv[])
{
	defineExperiment();
	return 0;
}