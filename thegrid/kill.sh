pid=`cat ./thegrid.pid`
if [[ -n $pid ]]; then
  echo "killing process $pid"
  kill $pid
  rm ./thegrid.pid
else
  echo "Does not exist"
fi