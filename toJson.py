# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

import os.path
import json
import os
files = ['imdb-data-new.txt', 'imdbData.txt', 'movieData2.txt', 'rottenTomotoesData.txt']
for filename in files: #os.listdir("data"):
        fname = os.path.join("data", filename)
        print fname
        with open(fname) as f:
            with open(fname.split(".")[0]+ ".json", "w") as j:
                temp = list()
                data = f.readlines()
                for line in data :
                    if(len(line.split(",")) > 20):
                        line = eval(line)
                        temp.append(line)
                json.dump(temp, j )
