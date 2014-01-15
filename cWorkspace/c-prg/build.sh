#rm *.exe *.o
gcc -c *.c
gcc -o $1.exe $1.o library.o
# name=$1
# output=${name:0:${#name}-2}
# gcc -o $output $name
# if [[ $? != 0 ]] ; then
# 	exit 1
# fi 
# $output