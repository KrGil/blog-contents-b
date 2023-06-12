```
---------------------------------------------------------------------------
OutOfMemoryError                          Traceback (most recent call last)
<ipython-input-43-264efb78d7b2> in <cell line: 11>()
     10 # Forward pass through the loaded model
     11 with torch.no_grad():
---> 12     outputs = model(X_test_tensor)
     13     predicted = (outputs >= 0.5).squeeze().cpu().numpy()
     14 
```

------

3 frames

------

```
/usr/local/lib/python3.10/dist-packages/torch/nn/modules/rnn.py in forward(self, input, hx)
    810         self.check_forward_args(input, hx, batch_sizes)
    811         if batch_sizes is None:
--> 812             result = _VF.lstm(input, hx, self._flat_weights, self.bias, self.num_layers,
    813                               self.dropout, self.training, self.bidirectional, self.batch_first)
    814         else:
OutOfMemoryError: CUDA out of memory. Tried to allocate 13.98 GiB (GPU 0; 14.75 GiB total capacity; 2.41 GiB already allocated; 10.79 GiB free; 2.74 GiB reserved in total by PyTorch) If reserved memory is >> allocated memory try setting max_split_size_mb to avoid fragmentation.  See documentation for Memory Management and PYTORCH_CUDA_ALLOC_CONF
```