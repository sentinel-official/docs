# How to upgrade your Sentinel Node

***Before starting any upgrade, please backup your mnemonic phrase. \
It wont be asked again by the node, as the /.sentinelnode folder is not edited. \
However, if something goes wrong you could loose access to the wallet used in the node.*** 

1. Please first confirm that node is stopped and the Github image removed before doing the update.
   You can kill the server if using TMUX (A bit drastic, but will stop everything)

    ``` sh
    tmux kill-server
    ```
   Or you can stop the DOCKER container. (This will stop all the containers running in your machine)

    ``` sh
    docker container stop $(docker container list -q)
    ```
     Then delete the folder of the GitHub image.

    ``` sh
    rm -rf ${HOME}/dvpn-node
    ```
2. Clone the GitHub repository

    ``` sh
    git clone https://github.com/sentinel-official/dvpn-node.git \
        ${HOME}/dvpn-node/
    ```

3. Change the working directory and checkout to the latest tag

    ``` sh
    cd ${HOME}/dvpn-node/ && \
    commit=$(git rev-list --tags --max-count=1) && \
    git checkout $(git describe --tags ${commit})
    ```

4. Build the image

    ``` sh
    docker build --file Dockerfile \
        --tag sentinel-dvpn-node \
        --force-rm \
        --no-cache \
        --compress .
    ```
    Job Done.
