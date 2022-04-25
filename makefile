teach-m:
	git checkout instructor-branch
	git merge master
	git add --all
	git commit -m "Instructor merge"
	git push origin HEAD
