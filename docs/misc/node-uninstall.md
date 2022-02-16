---
title: Uninstalling nodejs and npm
sidebar_label: Uninstall node
---

Where are the node files? Get the installer and expand to see.

```bash
pkgutil --expand ~/Desktop/node-v14.18.0.pkg ~/desktop/node
```

List files with `lsbom`:
```bash
lsbom -s ~/desktop/node/node-v14.18.0.pkg/Bom
lsbom -s ~/desktop/node/npm-v6.14.15.pkg/Bom
```

We need to delete following directories:
```bash
sudo rm -rf ~/.npm ~/.nvm ~/node_modules ~/.node-gyp ~/.npmrc ~/.node_repl_history
sudo rm -rf /usr/local/bin/npm /usr/local/bin/node-debug /usr/local/bin/node /usr/local/bin/node-gyp
sudo rm -rf /usr/local/share/man/man1/node* /usr/local/share/man/man1/npm*
sudo rm -rf /usr/local/include/node /usr/local/include/node_modules
sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /usr/local/lib/dtrace/node.d
sudo rm -rf /opt/local/include/node /opt/local/bin/node /opt/local/lib/node
sudo rm -rf /usr/local/share/doc/node
sudo rm -rf /usr/local/share/systemtap/tapset/node.stp
```
